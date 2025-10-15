"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  } as const;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Try EmailJS first if configured
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Log environment variables (without exposing sensitive data)
    console.log("EmailJS Config Check:", {
      serviceId: serviceId ? "✓ Set" : "✗ Missing",
      templateId: templateId ? "✓ Set" : "✗ Missing", 
      publicKey: publicKey ? "✓ Set" : "✗ Missing"
    });

    if (serviceId && templateId && publicKey && 
        serviceId.trim() !== "" && templateId.trim() !== "" && publicKey.trim() !== "") {
      try {
        console.log("Attempting to send via EmailJS...");
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: "Krishnamurari",
          },
          publicKey
        );

        if (result.status === 200) {
          console.log("EmailJS sent successfully");
          setSubmitStatus("success");
          reset();
          setIsSubmitting(false);
          return;
        }
      } catch (emailError: unknown) {
        console.error("EmailJS failed with error:", emailError);
        const errorObj = emailError as Record<string, unknown>;
        console.error("Error details:", {
          message: errorObj?.message || "Unknown error",
          status: errorObj?.status || "No status",
          text: errorObj?.text || "No text"
        });
      }
    } else {
      console.log("EmailJS not properly configured, using fallback API");
      console.log("Missing or empty environment variables - check your .env.local file");
    }

    // Fallback: Try internal API route
    try {
      console.log("Attempting to send via fallback API...");
      const fallbackResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (fallbackResponse.ok) {
        console.log("Fallback API sent successfully");
        setSubmitStatus("success");
        reset();
        setIsSubmitting(false);
        return;
      }
    } catch (fallbackError) {
      console.error("Fallback API error:", fallbackError);
    }

    // If both methods fail
    console.error("All contact methods failed");
    setSubmitStatus("error");
    
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-4 sm:p-6 rounded-2xl border border-border bg-gradient-to-b from-background to-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Top row: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <input
                {...register("name")}
                type="text"
                id="name"
                aria-invalid={!!errors.name}
                placeholder=" "
                className="peer w-full px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-4 top-3 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:px-1 peer-focus:bg-background peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Name *
              </label>
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-destructive flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <input
                {...register("email")}
                type="email"
                id="email"
                aria-invalid={!!errors.email}
                placeholder=" "
                className="peer w-full px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-3 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:px-1 peer-focus:bg-background peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email *
              </label>
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-destructive flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div variants={itemVariants}>
          <div className="relative">
            <input
              {...register("subject")}
              type="text"
              id="subject"
              aria-invalid={!!errors.subject}
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
            <label
              htmlFor="subject"
              className="pointer-events-none absolute left-4 top-3 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:px-1 peer-focus:bg-background peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Subject *
            </label>
          </div>
          {errors.subject && (
            <p className="mt-1 text-sm text-destructive flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.subject.message}
            </p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <div className="relative">
            <textarea
              {...register("message")}
              id="message"
              rows={6}
              aria-invalid={!!errors.message}
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-lg border border-border bg-background/80 text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-3 text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:px-1 peer-focus:bg-background peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Message *
            </label>
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-destructive flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full px-6 py-3 rounded-lg font-medium text-primary-foreground bg-primary overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/80 border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </span>
        </motion.button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2"
          >
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <p className="text-green-800 dark:text-green-200">
              Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-red-800 dark:text-red-200 font-medium mb-2">
                  Unable to send your message at the moment
                </p>
                <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                  Please try again in a few minutes, or reach out to me directly:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-red-700 dark:text-red-300">
                    📧 <a href="mailto:krishnamurari.dev@gmail.com" className="underline hover:no-underline">
                      krishnamurari.dev@gmail.com
                    </a>
                  </p>
                  <p className="text-red-700 dark:text-red-300">
                    💼 <a href="https://linkedin.com/in/krishnamurari7" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
}

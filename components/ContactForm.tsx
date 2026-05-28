"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          company: formData.get("company")
        })
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "We could not send your message. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-white p-8 shadow-soft sm:p-10" role="status" aria-live="polite">
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-teal" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-black text-ink">Message sent</h2>
          <p className="mt-3 text-slate-600">
            Thanks for reaching out. We received your message and will get back to you soon.
          </p>
          <button
            className="btn btn-secondary mt-6"
            type="button"
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-5 rounded-lg bg-white p-6 shadow-soft md:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <label className="label">
        Name
        <input className="input" name="name" autoComplete="name" required placeholder="Your name" disabled={status === "submitting"} />
      </label>
      <label className="label">
        Email
        <input
          className="input"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          disabled={status === "submitting"}
        />
      </label>
      <label className="label">
        Interest
        <select className="select" name="interest" defaultValue="Volunteer" disabled={status === "submitting"}>
          <option>Volunteer</option>
          <option>Sponsor</option>
          <option>Share a story</option>
          <option>Future donation</option>
          <option>Media or partnership</option>
        </select>
      </label>
      <label className="label">
        Phone optional
        <input className="input" name="phone" autoComplete="tel" placeholder="Best number" disabled={status === "submitting"} />
      </label>
      <label className="label md:col-span-2">
        Message
        <textarea
          className="textarea"
          name="message"
          required
          placeholder="Tell us how you would like to help."
          disabled={status === "submitting"}
        />
      </label>
      <label className="sr-only" aria-hidden="true">
        Company
        <input tabIndex={-1} autoComplete="off" name="company" />
      </label>
      {status === "error" && errorMessage ? (
        <p className="rounded-lg border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-semibold text-ink md:col-span-2" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <div className="md:col-span-2">
        <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
          <Send className="h-4 w-4" />
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

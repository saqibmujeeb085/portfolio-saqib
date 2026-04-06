"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    reset();
  };

  return (
    <main className="section-padding container-wide">
      <h1 className="text-5xl font-semibold">Contact</h1>
      <form className="mt-8 grid max-w-xl gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" className="rounded-md border border-white/15 bg-transparent px-4 py-3" />
        {errors.name && <p className="text-sm text-red-400">Name is required.</p>}
        <input {...register("email")} placeholder="Email" className="rounded-md border border-white/15 bg-transparent px-4 py-3" />
        {errors.email && <p className="text-sm text-red-400">Valid email is required.</p>}
        <textarea {...register("message")} placeholder="Tell me about your project" className="min-h-40 rounded-md border border-white/15 bg-transparent px-4 py-3" />
        {errors.message && <p className="text-sm text-red-400">Message must be at least 10 characters.</p>}
        <button disabled={isSubmitting} className="rounded-full bg-violet-600 px-6 py-3 disabled:opacity-60">{isSubmitting ? "Sending..." : "Send Message"}</button>
      </form>
    </main>
  );
}

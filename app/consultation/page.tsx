export default function ConsultationPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/";
  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">Consultation Booking</h1><a className="mt-6 inline-flex rounded-full bg-violet-600 px-6 py-3" href={bookingUrl} target="_blank">Book a call</a></main>;
}

import Image from "next/image";
import { site } from "@/lib/site";

export function PayPalDonate() {
  return (
    <div className="space-y-6">
      <form
        action={site.paypal.paymentUrl}
        method="post"
        target="_blank"
        className="flex flex-col items-center gap-3"
      >
        <button
          type="submit"
          className="inline-flex h-11 min-w-[11.625rem] cursor-pointer items-center justify-center rounded-md bg-[#FFD140] px-8 text-base font-bold text-black transition-opacity hover:opacity-90 focus-ring"
        >
          Donate Now
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
          alt="Accepted cards and payment methods"
          className="h-6 w-auto"
        />
        <p className="flex items-center gap-1.5 text-xs text-sand/70">
          Powered by
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="PayPal"
            className="h-3.5 w-auto"
          />
        </p>
      </form>

      <div className="flex flex-col items-center gap-3 border-t border-cream/15 pt-6">
        <p className="text-center text-sm text-sand/80">
          Prefer to scan? Open the PayPal donate page on your phone.
        </p>
        <div className="overflow-hidden rounded-md bg-cream p-3">
          <Image
            src="/brand/paypal-qr.png"
            alt="QR code — Hope Has No Borders Make a Difference. Scan to donate with PayPal."
            width={200}
            height={240}
            className="h-auto w-44 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={site.paypal.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md border border-cream/30 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/20 focus-ring"
        >
          Open PayPal payment page
        </a>
        <a
          href={site.paypalMeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md border border-cream/20 px-6 py-2.5 text-sm text-sand/85 transition-colors hover:text-cream focus-ring"
        >
          Or use PayPal.Me
        </a>
      </div>
    </div>
  );
}

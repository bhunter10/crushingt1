"use client";

import { useMemo, useState } from "react";

const donationAmounts = [25, 50, 100, 250, 500];

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2
  }).format(amount);
}

export function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");

  const amount = useMemo(() => {
    const parsedCustomAmount = Number(customAmount);

    if (customAmount && Number.isFinite(parsedCustomAmount) && parsedCustomAmount > 0) {
      return parsedCustomAmount;
    }

    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const formattedAmount = formatAmount(amount);
  const formattedFrequency = frequency === "monthly" ? "Monthly" : "One-time";
  const totalLabel = frequency === "monthly" ? "Monthly gift" : "Total today";

  function chooseAmount(amountValue: number) {
    setSelectedAmount(amountValue);
    setCustomAmount("");
  }

  return (
    <form className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_24px_70px_rgba(17,34,53,0.12)] lg:grid-cols-[1fr_22rem]" onSubmit={(event) => event.preventDefault()}>
      <div className="p-5 sm:p-8">
        <div className="border-b border-slate-200 pb-6">
          <p className="eyebrow">Make a gift</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-ink sm:text-4xl">Choose your donation</h2>
        </div>

        <fieldset className="mt-7">
          <legend className="text-base font-black text-ink">Gift frequency</legend>
          <div className="mt-3 grid grid-cols-2 rounded-lg border border-slate-200 bg-slate-50 p-1">
            <label className="cursor-pointer">
              <input
                checked={frequency === "one-time"}
                className="peer sr-only"
                name="frequency"
                onChange={() => setFrequency("one-time")}
                type="radio"
                value="one-time"
              />
              <span className="block rounded-md px-4 py-3 text-center text-sm font-black text-slate-600 transition peer-checked:bg-coral peer-checked:text-white">One-time</span>
            </label>
            <label className="cursor-pointer">
              <input
                checked={frequency === "monthly"}
                className="peer sr-only"
                name="frequency"
                onChange={() => setFrequency("monthly")}
                type="radio"
                value="monthly"
              />
              <span className="block rounded-md px-4 py-3 text-center text-sm font-black text-slate-600 transition peer-checked:bg-coral peer-checked:text-white">Monthly</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="text-base font-black text-ink">Donation amount</legend>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {donationAmounts.map((amountValue) => (
              <label key={amountValue} className="cursor-pointer">
                <input
                  checked={!customAmount && selectedAmount === amountValue}
                  className="peer sr-only"
                  name="amount"
                  onChange={() => chooseAmount(amountValue)}
                  type="radio"
                  value={amountValue}
                />
                <span className="block rounded-lg border border-slate-200 bg-white px-4 py-4 text-center text-xl font-black text-ink shadow-sm transition peer-checked:border-coral peer-checked:bg-coral peer-checked:text-white">
                  {formatAmount(amountValue)}
                </span>
              </label>
            ))}
            <label className={`rounded-lg border bg-white px-4 py-3 transition ${customAmount ? "border-coral ring-2 ring-coral/20" : "border-slate-200"}`}>
              <span className="block text-xs font-black uppercase tracking-[0.08em] text-slate-500">Other</span>
              <input
                className="mt-1 w-full bg-transparent text-xl font-black text-ink outline-none placeholder:text-slate-400"
                inputMode="decimal"
                name="custom-amount"
                onChange={(event) => setCustomAmount(event.target.value.replace(/[^0-9.]/g, ""))}
                placeholder="$"
                value={customAmount}
              />
            </label>
          </div>
        </fieldset>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="label">
            First name
            <input className="input" name="first-name" autoComplete="given-name" required />
          </label>
          <label className="label">
            Last name
            <input className="input" name="last-name" autoComplete="family-name" required />
          </label>
          <label className="label md:col-span-2">
            Email
            <input className="input" name="email" type="email" autoComplete="email" required />
          </label>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-black text-ink">Payment information</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_8rem_8rem]">
            <label className="label">
              Card number
              <input className="input bg-white" name="card-number" inputMode="numeric" placeholder="1234 1234 1234 1234" />
            </label>
            <label className="label">
              Expiration
              <input className="input bg-white" name="expiration" inputMode="numeric" placeholder="MM/YY" />
            </label>
            <label className="label">
              CVV
              <input className="input bg-white" name="cvv" inputMode="numeric" placeholder="123" />
            </label>
          </div>
        </div>
      </div>

      <aside className="bg-ink p-5 text-white sm:p-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-sky-200">Your gift</p>
          <div className="mt-5 space-y-3 text-sm font-bold text-slate-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Selected amount</span>
              <span className="text-white">{formattedAmount}</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span>Frequency</span>
              <span className="text-white">{formattedFrequency}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{totalLabel}</span>
              <span className="text-2xl font-black text-white">{formattedAmount}</span>
            </div>
          </div>
        </div>

        <button className="btn mt-6 w-full bg-coral text-white shadow-[0_16px_34px_rgba(242,100,75,0.28)] hover:bg-[#df573f]" type="submit">
          Donate {formattedAmount}
        </button>

        <p className="mt-4 text-center text-xs font-semibold leading-6 text-slate-300">
          Secure donation form placeholder. Payment processing will be connected later.
        </p>
      </aside>
    </form>
  );
}

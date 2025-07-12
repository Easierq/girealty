import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center p-6">
      <div className="max-w-3xl w-full rounded-lg pt-[100px]">
        <div className="mx-auto max-w-[500px] text-center w-full flex justify-center flex-col items-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            How can we help?
          </h1>
          <p className="text-base md:text-lg text-slate-600">
            Get in touch with our sales and support teams for demos, onboarding
            support, or product questions.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div className="bg-slate-50/20 borcder border-slate-500 p-6 rounded-md my-2 mb-4">
            <p className="mb-2 text-xl font-bold">Marketing</p>
            <p className="text-slate-500 text-sm">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
            <p className="text-base text-slate-700 font-semibold mt-2">
              realty@gmail.com
            </p>
          </div>
          <div className="bg-slate-50/20 borcder border-slate-500 p-6 rounded-md my-2">
            <p className="mb-2 text-xl font-bold">Legal</p>
            <p className="text-slate-500 text-sm">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
            <p className="text-base text-slate-700 font-semibold mt-2">
              +1 349 013 812
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

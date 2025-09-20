import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast is your turnaround time?",
      answer: "We deliver most videos within 4-36 hours, depending on complexity. Simple edits like podcast episodes are usually ready within 4-12 hours, while more complex projects like documentaries may take up to 36 hours."
    },
    {
      question: "What's included in unlimited revisions?",
      answer: "Unlimited revisions means you can request changes until you're 100% satisfied with the final product. This includes adjustments to pacing, color correction, graphics, transitions, and any other editing elements."
    },
    {
      question: "Can I really pause or cancel anytime?",
      answer: "Absolutely! There are no long-term contracts. You can pause your subscription if you don't have videos to edit or cancel entirely. When paused, you won't be billed until you reactivate your subscription."
    },
    {
      question: "What video formats and types do you edit?",
      answer: "We edit all types of video content including podcasts, YouTube videos, short-form content for TikTok/Instagram/YouTube Shorts, video ads, explainer videos, documentaries, talking head videos, and faceless content."
    },
    {
      question: "How do I submit videos for editing?",
      answer: "Once subscribed, you'll get access to our client portal where you can upload your raw footage, share your editing requirements, reference videos, and brand guidelines. We support all major video formats and file sizes."
    },
    {
      question: "Who will be editing my videos?",
      answer: "You'll be assigned a dedicated video editor who learns your style and preferences. All our editors are professionals with 5+ years of experience and specialize in different types of content."
    },
    {
      question: "Do you provide the raw files and project files?",
      answer: "Yes! You'll receive the final edited video in your preferred format, plus the raw project files (Premiere Pro, Final Cut Pro, or DaVinci Resolve) so you have complete ownership of your content."
    },
    {
      question: "What if I need rush delivery?",
      answer: "For urgent projects, we offer priority processing for an additional fee. Rush jobs can often be completed within 2-12 hours depending on complexity and current queue."
    },
    {
      question: "Do you handle audio editing and cleanup?",
      answer: "Yes! Audio editing is included in all our services. We provide noise reduction, level balancing, EQ adjustments, and can sync audio with video footage."
    },
    {
      question: "Can you help with thumbnails and graphics?",
      answer: "Absolutely! We create custom thumbnails, lower thirds, titles, transitions, and branded graphics as part of our service. We can also work with your existing brand guidelines."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our video editing subscriptions. Can't find what you're looking for? Contact our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-glass border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-brand">
              Book Free Consultation
            </button>
            <button className="btn-secondary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
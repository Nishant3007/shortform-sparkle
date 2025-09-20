import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Clock, Phone } from "lucide-react";
import footerLogo from "@/assets/shortformvid-footer-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-gradient">Video Content</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of creators and businesses who've scaled their content with our professional editing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-brand text-lg px-8 py-6 group">
              Start Your Subscription
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
              Book Free Consultation
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">4-36 Hour Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm">Unlimited Revisions</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">Pause Anytime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <img 
                src={footerLogo} 
                alt="ShortFormVid" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm max-w-md">
                Professional video editing subscriptions that help content creators and businesses scale their video content with fast turnarounds and unlimited revisions.
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Podcast Editing</li>
                <li>Short-Form Videos</li>
                <li>Video Ads</li>
                <li>Explainer Videos</li>
                <li>Documentaries</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ShortFormVid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
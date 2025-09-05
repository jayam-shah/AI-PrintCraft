import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TemplateGallery from "@/components/design/template-gallery";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Printer, Palette, Zap, Smartphone, Download, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-printcraft-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-animate text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <div className="w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
          <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '1s'}}>
            <div className="w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <div className="w-12 h-12 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up">
            Create Stunning Print Materials
            <span className="block text-yellow-300 animate-bounce-in" style={{animationDelay: '0.3s'}}>In Minutes</span>
          </h1>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            Design professional banners, leaflets, and posters with our intuitive creation tool. 
            Just input your idea, customize your design, and we'll handle the printing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/design">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold px-8 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow"
                data-testid="button-start-creating"
              >
                Start Creating
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/20 font-semibold px-8 py-4 transform transition-all duration-300 hover:scale-105"
              data-testid="button-view-templates"
            >
              View Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <TemplateGallery />

      {/* Design Creation Interface */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us your idea and we'll help you create the perfect design
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto glass-effect animate-slide-in-up">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">Ready to bring your ideas to life?</p>
              <Link href="/design">
                <Button size="lg" className="animate-bounce-in" style={{animationDelay: '0.5s'}}>
                  Start Your Design Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrintCraft?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional printing made simple with our AI-powered design tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 card-hover-effect animate-slide-in-up stagger-1" data-testid="feature-ai-design">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Design</h3>
              <p className="text-gray-600">Just describe your idea and our AI creates professional designs instantly</p>
            </div>

            <div className="text-center p-6 card-hover-effect animate-slide-in-up stagger-2" data-testid="feature-customization">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Customization</h3>
              <p className="text-gray-600">Drag-and-drop editor with professional templates and design elements</p>
            </div>

            <div className="text-center p-6 card-hover-effect animate-slide-in-up stagger-3 paper-airplane-card" data-testid="feature-delivery" onClick={() => {
              const card = document.querySelector('[data-testid="feature-delivery"]');
              if (card) {
                card.classList.add('animate-paperplane');
                setTimeout(() => {
                  card.classList.remove('animate-paperplane');
                }, 2000);
              }
            }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Printer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery ✈️</h3>
              <p className="text-gray-600">High-quality printing with quick turnaround and reliable shipping</p>
              <p className="text-xs text-primary mt-2 opacity-70">Click me to see magic!</p>
            </div>

            <div className="text-center p-6 card-tilt animate-slide-in-up stagger-4" data-testid="feature-mobile">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-gray-600">Design and order from any device with our responsive interface</p>
            </div>

            <div className="text-center p-6 card-tilt animate-slide-in-up stagger-5" data-testid="feature-download">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Download</h3>
              <p className="text-gray-600">Get your designs immediately as high-resolution PDFs</p>
            </div>

            <div className="text-center p-6 card-tilt animate-slide-in-up stagger-6" data-testid="feature-support">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Get help anytime with our dedicated customer support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for what you print. No hidden fees, no subscriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200" data-testid="pricing-basic">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$9.99</div>
                <p className="text-gray-600 mb-6">per design + printing</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Standard templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Basic customization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    PDF download
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Email support
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-testid="button-basic-plan"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary relative" data-testid="pricing-pro">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$19.99</div>
                <p className="text-gray-600 mb-6">per design + printing</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Premium templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Advanced customization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Multiple formats
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Rush printing available
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  data-testid="button-pro-plan"
                >
                  Choose Pro
                </Button>
              </div>
            </div>

            {/* Business */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200" data-testid="pricing-business">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Business</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$39.99</div>
                <p className="text-gray-600 mb-6">per design + printing</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Custom branding
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Bulk discounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Custom sizes
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  data-testid="button-business-plan"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using TechMart's website and services, you agree to be bound by these Terms and 
                Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Products and Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate product descriptions and pricing. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not guarantee that all product descriptions or other content is accurate, complete, or error-free</li>
                <li>We reserve the right to correct any errors, inaccuracies, or omissions</li>
                <li>Prices are subject to change without notice</li>
                <li>Product availability may vary</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When placing an order:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You must provide accurate and complete information</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before order processing</li>
                <li>All prices are in USD unless otherwise stated</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to process orders promptly, but delivery times are estimates only. We are not liable for 
                delays caused by shipping carriers or circumstances beyond our control. Risk of loss passes to you 
                upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our return policy allows returns within 30 days of purchase, subject to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Items must be unused and in original packaging</li>
                <li>Proof of purchase is required</li>
                <li>Some items may not be eligible for return</li>
                <li>Refunds will be processed to the original payment method</li>
                <li>Shipping costs are non-refundable unless the return is due to our error</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Products are covered by manufacturer warranties where applicable. We make no additional warranties 
                beyond those provided by manufacturers. All products are sold "as is" unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, TechMart shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of our products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of TechMart 
                or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Collect user information without consent</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to our services immediately, without prior 
                notice, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Continued use of our services after changes 
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: legal@techmart.com<br />
                Phone: 1-800-TECHMART<br />
                Address: 123 Tech Street, Silicon Valley, CA 94000
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

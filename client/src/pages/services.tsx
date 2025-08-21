import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Building, 
  Utensils, 
  Wrench, 
  Palette, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield
} from "lucide-react";

const services = [
  {
    id: "residential",
    title: "Residential Interior Design",
    subtitle: "Creating Homes That Reflect Your Lifestyle",
    description: "Transform your living spaces into personalized sanctuaries that perfectly balance comfort, functionality, and aesthetic appeal. From single rooms to complete home makeovers, we create interiors that tell your unique story.",
    icon: <Home className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Complete home design and renovation",
      "Room-by-room interior planning",
      "Custom furniture design and selection",
      "Color schemes and material selection",
      "Lighting design and installation",
      "Space planning and optimization"
    ],
    process: [
      "Initial consultation and space assessment",
      "Design concept development",
      "3D visualization and mood boards",
      "Implementation and project management"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Interior Design",
    subtitle: "Inspiring Workspaces That Drive Success",
    description: "Design productive, inspiring work environments that enhance employee satisfaction and impress clients. We create commercial spaces that reflect your brand identity while optimizing functionality and workflow.",
    icon: <Building className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Office design and layout planning",
      "Reception and lobby design",
      "Meeting room and conference facilities",
      "Break room and recreational spaces",
      "Brand integration and corporate identity",
      "Ergonomic furniture selection"
    ],
    process: [
      "Business needs analysis",
      "Workflow optimization planning",
      "Brand-aligned design development",
      "Phased implementation with minimal disruption"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality Design",
    subtitle: "Creating Memorable Guest Experiences",
    description: "Design exceptional hospitality spaces that create lasting impressions. From boutique hotels to fine dining restaurants, we craft environments that enhance guest experiences and drive business success.",
    icon: <Utensils className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Hotel lobby and guest room design",
      "Restaurant and bar interior design",
      "Spa and wellness facility design",
      "Event space and banquet hall design",
      "Outdoor dining and entertainment areas",
      "Custom hospitality furniture"
    ],
    process: [
      "Guest experience journey mapping",
      "Concept design and theme development",
      "Detailed design and specification",
      "Installation and staff training support"
    ]
  },
  {
    id: "renovation",
    title: "Space Renovation & Transformation",
    subtitle: "Breathing New Life Into Existing Spaces",
    description: "Completely transform outdated or underutilized spaces with strategic renovations. We maximize potential through creative reimagining, structural improvements, and modern design solutions.",
    icon: <Wrench className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Complete space restructuring",
      "Kitchen and bathroom renovations",
      "Basement and attic conversions",
      "Open floor plan creation",
      "Sustainable renovation solutions",
      "Heritage building restoration"
    ],
    process: [
      "Structural assessment and planning",
      "Permit acquisition and compliance",
      "Demolition and construction management",
      "Final design implementation"
    ]
  },
  {
    id: "consultation",
    title: "Design Consultation & Planning",
    subtitle: "Expert Guidance for Your Design Journey",
    description: "Get professional design advice and strategic planning for your project. Our consultation services help you make informed decisions about layouts, materials, colors, and budget allocation.",
    icon: <Palette className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Design strategy and concept development",
      "Space planning and layout optimization",
      "Material and finish selection guidance",
      "Budget planning and cost estimation",
      "Vendor and contractor recommendations",
      "Project timeline development"
    ],
    process: [
      "Initial design assessment",
      "Comprehensive planning session",
      "Detailed recommendations report",
      "Implementation guidance and support"
    ]
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture Design",
    subtitle: "Bespoke Pieces Crafted for Your Space",
    description: "Create unique, custom furniture pieces that perfectly fit your space and style. From built-in storage solutions to statement pieces, we design and craft furniture that's both beautiful and functional.",
    icon: <Lightbulb className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      "Bespoke furniture design",
      "Built-in storage solutions",
      "Custom cabinetry and millwork",
      "Upholstery and reupholstery services",
      "Antique furniture restoration",
      "Space-specific furniture solutions"
    ],
    process: [
      "Design concept and sketching",
      "Material selection and sourcing",
      "Craftsman coordination and production",
      "Delivery and installation"
    ]
  }
];

const whyChooseUs = [
  {
    icon: <Users className="w-8 h-8 text-gold-500" />,
    title: "Expert Team",
    description: "Our experienced designers bring creativity, technical expertise, and passion to every project."
  },
  {
    icon: <Clock className="w-8 h-8 text-gold-500" />,
    title: "Timely Delivery",
    description: "We respect your timeline and deliver projects on schedule without compromising quality."
  },
  {
    icon: <Shield className="w-8 h-8 text-gold-500" />,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties and ongoing support."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal-800 mb-6">
              Our <span className="text-gold-500">Services</span>
            </h1>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to transform your spaces and exceed your expectations
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-testid={`service-${service.id}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-auto"
                    data-testid={`img-${service.id}`}
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-charcoal-800">{service.title}</h2>
                      <p className="text-lg font-medium text-gold-500">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-3">What We Offer:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-charcoal-600">
                            <CheckCircle className="w-4 h-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-3">Our Process:</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="flex items-start text-charcoal-600">
                            <ArrowRight className="w-4 h-4 text-gold-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact" data-testid={`button-${service.id}-consultation`}>
                    <Button className="bg-gold-500 text-white hover:bg-gold-600">
                      Get Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-charcoal-800 mb-6">
              Why Choose <span className="text-gold-500">Artful Structures</span>
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              We combine creativity, expertise, and dedication to deliver exceptional design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-testid="why-choose-us">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal-800 mb-4">{item.title}</h3>
                  <p className="text-charcoal-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our expert team can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="button-get-quote">
              <Button size="lg" className="bg-gold-500 text-white hover:bg-gold-600">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/portfolio" data-testid="button-view-work">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-charcoal-800"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
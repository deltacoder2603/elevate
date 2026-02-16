import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Users, User, Crown, Shield, Code, Star, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = {
  convener: {
    title: "Convener",
    icon: Crown,
    members: [
      {
        name: "Dr Raghuraj Singh Suryavanshi",
        role: "Convener",
        image: "https://www.psit.ac.in/assets/webp/institute/Functionaries/dr_raghuraj_singh_suryavanshi.webp",
      }
    ]
  },
  coConvener: {
    title: "Co-Conveners",
    icon: Shield,
    members: [
      {
        name: "Dr. Nand Kishor Sharma",
        role: "Co-Convener",
        image: "/elevate2026/images/contactimages/nksir.jpeg",
        linkedin: "https://www.linkedin.com/in/dr-nand-kishore-sharma-b626b8117/",
      },
      {
        name: "Deepak Gupta",
        role: "Co-Convener",
        image: "/elevate2026/images/contactimages/deepaksir.jpeg",
      },
      {
        name: "Dr. Rajat Verma",
        role: "Co-Convener",
        image: "/elevate2026/images/contactimages/sir.jpeg",
        email: "rajatverma310795@gmail.com",
        linkedin: "https://www.linkedin.com/in/rajatverma310795?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ]
  },
  coordinators: {
    title: "Coordinators",
    icon: Users,
    members: [
      {
        name: "Anurag Dhawan",
        role: "Event Coordinator",
        image: "/elevate2026/images/contactimages/anuragsir.jpeg",
        email: " anurag.dhawan@psit.ac.in",
        phone: " +91 89605 10510",
        linkedin: "https://www.linkedin.com/in/anurag-dhawan-7857b911?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      }
    ]
  },
  eventLead: {
    title: "Event Lead",
    icon: Star,
    members: [
      {
        name: "Sushant Tiwari",
        role: "Event Lead",
        image: "/elevate2026/images/contactimages/sushant.jpeg",
        email: "sushanttiwari8455@gmail.com",
        phone: "+91 76449 05477",
        linkedin: "https://www.linkedin.com/in/sushant-tiwari-4410492a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Overall event management and team coordination"
      }
    ]
  },
  coEventLeads: {
    title: "Co-Event Leads",
    icon: Zap,
    members: [
      {
        name: "Pratham Gupta",
        role: "Event Co-Lead",
        image: "/elevate2026/images/contactimages/pratham1.jpeg",
        email: " prathamgupta6772@gmail.com",
        phone: "+91 95552 37761",
        linkedin: "https://www.linkedin.com/in/prathamgupta72005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Technical operations and infrastructure"
      },
      {
        name: "Vishesh Verma",
        role: "Event Co-Lead",
        image: "/elevate2026/images/contactimages/vishesh.jpeg",
        email: "anshr2591@gmail.com",
        phone: "+91 89605 49416",
        linkedin: "https://www.linkedin.com/in/vishesh-vermaa--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Marketing, promotions and publicity"
      }
    ]
  },
  coreMembers: {
    title: "Core Members",
    icon: Award,
    members: [
      {
        name: "Pratibha Pandey",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/pratibha.jpeg",
        email: "pratibhapandey1602@gmail.com",
        phone: "+91 94522 06683",
        linkedin: "https://www.linkedin.com/in/pratibha-pandey-4a4976378/",
        description: "Event planning and coordination"
      },
      {
        name: "Amitesh Kumar Shukla",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/amitesh.jpeg",
        email: "amiteshshukla31@gmail.com",
        phone: "+91 75187 53780",
        linkedin: "https://www.linkedin.com/in/amitesh-kumar-shukla-17152a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Event planning and coordination"
      },
      {
        name: "Dhruv Gaur",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/dhruv.jpeg",
        email: "dhruvgaur9d14@gmail.com",
        phone: "+91 63943 41417",
        linkedin: "https://www.linkedin.com/in/dhruv-gaur-671651332/",
        description: "Logistics and venue management"
      },
      {
        name: "Nikhil Singh",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/nikhil.jpeg",
        email: " nikhxn01@gmail.com",
        phone: "+91 79851 13688",
        linkedin: "www.linkedin.com/in/nikhxn01",
        description: "Registration and participant management"
      },
      {
        name: "Laina singh",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/liana.jpeg",
        email: " slaina34@gmail.com ",
        phone: "+91 63075 20184",
        linkedin: " https://www.linkedin.com/in/laina-singh-6314b9331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Technical support and troubleshooting"
      },
      {
        name: "Mansi Singh",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/mansi.jpeg",
        email: "mansisingh3845@gmail.com",
        phone: "+91 80770 44941",
        linkedin: "https://www.linkedin.com/in/mansi-singh-b2a990316",
        description: "Design and creative content"
      },
      {
        name: "Satyam Trivedi",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/satyam.jpeg",
        email: "Satyamtrivedi18t@gmail.com",
        phone: "+91 83037 45094",
        linkedin: "https://www.linkedin.com/in/satyam-trivedi-212669332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Social media management"
      },
      {
        name: "Shruti Jain",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/shruti.jpeg",
        email: " iamshrutijain.2@gmail.com ",
        phone: "+91 80907 71746",
        linkedin: " https://www.linkedin.com/in/shruti-jain-668173344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Sponsor relations and partnerships"
      },
      {
        name: "Shreya Tripathi",
        role: "Core Member",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEfRv1H8mAsBA/profile-displayphoto-crop_800_800/B56ZqG61YzJ8AI-/0/1763200164036?e=1771459200&v=beta&t=mW30--v95p38zKAFZry2LUXUvztDvzDiGeXPRxsg7OM",
        email: "shreyaatripathii108@gmail.com",
        phone: "+91 80047 13814",
        linkedin: "https://www.linkedin.com/in/shreya-tripathi-666b32380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Finance and budget management"
      },
      {
        name: "Manas Gupta",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/manas.jpeg",
        email: " guptamanas265@gmail.com",
        phone: "+91 70817 47540",
        linkedin: " https://www.linkedin.com/in/manas-gupta-849787342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        description: "Hospitality and guest management"
      },
      {
        name: "Jhanvi Chaudhary",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/jhanvi.jpeg",
        email: "jhanvi.2432078@gmail.com",
        phone: "+91 63942 43915",
        linkedin: "https://www.linkedin.com/in/jhanvi-chaudhary-843502324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Documentation and reporting"
      },
      {
        name: "Rashi Gupta",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/rashi1.jpeg",
        email: "rashigupta240@gmail.com ",
        phone: "+91 63934 73038",
        linkedin: " https://www.linkedin.com/in/rashi-gupta-323090366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Event Support"
      },
      {
        name: "Sonali Chauhan",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/sonali.jpeg",
        email: "sonali0700@gmail.com",
        phone: "+91 89603 68238",
        linkedin: " https://www.linkedin.com/in/sonali-chauhan-4a5602324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Event Support"
      },
      {
        name: "Suhani Chauhan",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/suhani.jpeg",
        email: " suhanichauhan208011@gmail.com ",
        phone: "+91 93360 10460",
        linkedin: "https://www.linkedin.com/in/suhani-chauhan-394905324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Event Support"
      },
      {
        name: "Siddhi Singh ",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/siddhi.jpeg",
        email: "siddhisingh1204@gmail.com",
        phone: "+91 99365 84212",
        linkedin: "https://www.linkedin.com/in/siddhi-singh-ss?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        description: "Event Support"
      },
      {
        name: "Kashi Mishra",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/kashi2.jpeg",
        email: "Kashimishra2005@gmail.com",
        phone: "+91 89603 68238 ",
        linkedin: "https://www.linkedin.com/in/kashi-mishra-2367a0360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        description: "Event Support"
      },
      {
        name: "Shreya Gupta",
        role: "Core Member",
        image: "/elevate2026/images/contactimages/shreyagupta.jpeg",
        email: "guptashreya1984@gmail.com",
        phone: "+91 63072 38884",
        linkedin: "https://www.linkedin.com/in/shreya-gupta-090171369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        description: "Event Support"
      },
    ]
  }
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
            >
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Contact</span>
              <br />
              <span className="text-gradient">Our Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Meet the dedicated team behind ELEVATE 2026. Connect with us for any queries or collaborations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => document.getElementById('quick-contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Email Us
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => document.getElementById('quick-contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Call Us
              </Button>
            </motion.div>

            {/* Floating Contact Icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              className="absolute top-20 left-10 text-primary/20"
            >
              <Mail className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-40 right-20 text-secondary/20"
            >
              <Phone className="w-12 h-12" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 text-primary/20"
            >
              <MapPin className="w-14 h-14" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          {Object.entries(teamMembers).map(([key, group], groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="mb-20 last:mb-0"
              >
                {/* Section Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-4"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold text-primary">{group.title}</span>
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {group.title}
                  </h2>
                </div>

                {/* Team Members Grid */}
                <div className={`grid gap-6 ${key === 'coreMembers' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' :
                  key === 'coEventLeads' ? 'md:grid-cols-2 max-w-4xl mx-auto' :
                    key === 'coConvener' ? 'md:grid-cols-2 lg:grid-cols-3' :
                      'max-w-2xl mx-auto'
                  }`}>
                  {group.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: memberIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                        {/* Profile Image */}
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `https://picsum.photos/seed/${member.name}/400/320.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Social Links Overlay */}
                          {member.name !== "Dr Raghuraj Singh Suryavanshi" && (
                            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                              >
                                <Linkedin className="w-5 h-5" />
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Member Info */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                          <p className="text-primary font-medium mb-4">{member.role}</p>

                          {/* Contact Info */}
                          <div className="space-y-3">
                            {member.email && (
                              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a href={`mailto:${member.email}`} className="text-sm">
                                  {member.email}
                                </a>
                              </div>
                            )}
                            {member.phone && (
                              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a href={`tel:${member.phone}`} className="text-sm">
                                  {member.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>



      {/* Quick Contact Section */}
      <section id="quick-contact" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-3xl p-6 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Quick <span className="text-primary">Contact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              For general inquiries, sponsorships, or media partnerships
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@elevate2026.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                startupconclave.elevate2026@gmail.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 89605 10510
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                PSIT College, Kanpur
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="hero" size="xl" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/events">View Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

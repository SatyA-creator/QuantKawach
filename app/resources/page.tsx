// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import {
//   BookOpen,
//   ArrowRight,
//   FileText,
//   Download,
//   ExternalLink
// } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Navigation } from '@/components/navigation'
// import { Footer } from '@/components/footer'
// import { SectionWrapper, FadeIn } from '@/components/section-wrapper'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion'

// const faqs = [
//   {
//     question: 'What is post-quantum cryptography?',
//     answer: 'Post-quantum cryptography refers to cryptographic algorithms that are secure against attacks by both classical and quantum computers. Current encryption methods like RSA and ECC can be broken by sufficiently powerful quantum computers using algorithms like Shor\'s algorithm. Post-quantum algorithms are based on mathematical problems that remain hard even for quantum computers.'
//   },
//   {
//     question: 'Why do Indian banks need quantum-safe security now?',
//     answer: 'The "harvest now, decrypt later" threat means adversaries can collect encrypted banking data today and store it until quantum computers capable of breaking current encryption become available. Starting the transition to quantum-safe cryptography now ensures long-term data protection and gives organizations time to implement changes before the threat materializes.'
//   },
//   {
//     question: 'Does QuantKawach require changes to existing banking applications?',
//     answer: 'No. QuantKawach is designed as a gateway-layer solution that wraps existing APIs with post-quantum protection. Your banking applications, databases, and internal systems remain unchanged. The encryption and decryption happen transparently at the API gateway level.'
//   },
//   {
//     question: 'Which NIST post-quantum standards does QuantKawach implement?',
//     answer: 'QuantKawach implements the NIST-standardized algorithms: ML-DSA-65 (formerly Dilithium) for digital signatures and Kyber-768 for key encapsulation. These algorithms have undergone extensive cryptanalysis and are considered secure against both classical and quantum attacks.'
//   },
//   {
//     question: 'How does QuantKawach impact API latency?',
//     answer: 'QuantKawach adds less than 5ms of latency to API calls. Our implementation is optimized for high-throughput banking workloads and can handle 100,000+ transactions per second. The performance impact is negligible compared to the security benefits provided.'
//   },
//   {
//     question: 'Is QuantKawach compliant with RBI cybersecurity guidelines?',
//     answer: 'Yes. QuantKawach is designed to meet and exceed RBI cybersecurity framework requirements. It provides quantum-safe encryption, secure key management, comprehensive audit logging, and real-time monitoring capabilities mandated by regulatory guidelines.'
//   },
//   {
//     question: 'What happens if one of the cryptographic algorithms is compromised?',
//     answer: 'QuantKawach implements hybrid cryptography, combining post-quantum algorithms with traditional algorithms. This defense-in-depth approach means that even if one algorithm is compromised, the other maintains security. Our crypto-agile architecture also allows seamless algorithm upgrades.'
//   },
//   {
//     question: 'How is key management handled?',
//     answer: 'QuantKawach integrates with hardware security modules (HSM) including AWS CloudHSM, Azure Dedicated HSM, and Thales Luna. Keys are generated, stored, and managed within these tamper-resistant devices, ensuring they never exist in plaintext outside the HSM.'
//   }
// ]

// const documents = [
//   {
//     title: 'Technical Whitepaper',
//     description: 'Comprehensive technical overview of QuantKawach architecture and cryptographic implementation',
//     type: 'PDF',
//     size: '2.4 MB'
//   },
//   {
//     title: 'API Documentation',
//     description: 'Complete API reference for SDK integration and gateway configuration',
//     type: 'Online',
//     size: 'Interactive'
//   },
//   {
//     title: 'Security Assessment Report',
//     description: 'Third-party security audit findings and compliance certifications',
//     type: 'PDF',
//     size: '1.8 MB'
//   },
//   {
//     title: 'Implementation Guide',
//     description: 'Step-by-step deployment guide for enterprise implementations',
//     type: 'PDF',
//     size: '3.2 MB'
//   }
// ]

// export default function ResourcesPage() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero */}
//       <section className="bg-gradient-to-b from-secondary/50 to-background pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pt-40 lg:pb-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.span
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium mb-6"
//             >
//               <BookOpen className="w-4 h-4 text-accent" />
//               Resources
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance"
//             >
//               Documentation & Resources
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
//             >
//               Technical documentation, whitepapers, and frequently asked questions about QuantKawach.
//             </motion.p>
//           </div>
//         </div>
//       </section>

//       {/* Whitepaper CTA */}
//       <SectionWrapper id="whitepaper">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 lg:p-12"
//           >
//             <div className="flex flex-col lg:flex-row items-center gap-8">
//               <div className="flex-1">
//                 <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
//                   Download the Technical Whitepaper
//                 </h2>
//                 <p className="text-primary-foreground/80 mb-6 leading-relaxed">
//                   Our comprehensive whitepaper covers the cryptographic foundations, architecture decisions, and implementation details of QuantKawach for Indian banking infrastructure.
//                 </p>
//                 <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
//                   <Button
//                     size="lg"
//                     className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
//                   >
//                     <Download className="w-4 h-4 mr-2" />
//                     Download Whitepaper
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
//                   >
//                     View Online
//                     <ExternalLink className="w-4 h-4 ml-2" />
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex-shrink-0">
//                 <div className="w-32 h-40 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
//                   <FileText className="w-16 h-16 text-primary-foreground/50" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </SectionWrapper>

//       {/* Documentation */}
//       <SectionWrapper className="bg-secondary/30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
//               Documentation Library
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Technical resources for implementation and integration
//             </p>
//           </FadeIn>

//           <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
//             {documents.map((doc, index) => (
//               <motion.div
//                 key={doc.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
//                     <FileText className="w-6 h-6 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
//                       {doc.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground mb-3">
//                       {doc.description}
//                     </p>
//                     <div className="flex items-center gap-3 text-xs text-muted-foreground">
//                       <span className="px-2 py-1 bg-secondary rounded">{doc.type}</span>
//                       <span>{doc.size}</span>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* FAQ */}
//       <SectionWrapper id="faq">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <FadeIn className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Common questions about post-quantum security and QuantKawach
//             </p>
//           </FadeIn>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <Accordion type="single" collapsible className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <AccordionItem
//                   key={index}
//                   value={`item-${index}`}
//                   className="rounded-xl border border-border bg-card px-4 data-[state=open]:border-accent/30 sm:px-6"
//                 >
//                   <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </motion.div>
//         </div>
//       </SectionWrapper>

//       {/* CTA */}

//       <Footer />
//     </div>
//   )
// }

export default function ResourcesPage() {
  return null
}

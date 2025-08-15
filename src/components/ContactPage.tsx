import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser';
interface ContactPageProps {
    'data-id'?: string
}
export const ContactPage: React.FC<ContactPageProps> = ({
    'data-id': dataId,
}) => {
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
        to_email: '',
        reply_to: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Initialize EmailJS
            emailjs.init('9KI5ZG83KdT1nrTVk')

            const templateParams = {
                subject: `New Contact Form Submission`,
                name: formData.name,
                email: formData.email,
                message: formData.message,
                to_email: 'ooraalp@gmail.com',
                reply_to: formData.email
            }

            // Send email using EmailJS
            await emailjs.send(
                'service_bpv4mt9',
                'template_ds20ewo',
                templateParams
            )
            setFormData({
                subject: '',
                name: '',
                email: '',
                message: '',
                to_email: '',
                reply_to: ''
            });

            setIsSubmitting(false)
            setSubmitted(true)
        } catch (error) {
            console.error('EmailJS Error:', error)
            setIsSubmitting(false)
            // Optionally add error handling state/UI
        }
    }
    return (
        <section id="contact"
            className="min-h-screen bg-background w-full py-12 px-4 sm:px-6 lg:px-8"
            data-id={dataId}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and
                        we'll respond as soon as possible.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-card rounded-lg p-6 space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium text-foreground">Email</h3>
                                    <p className="text-muted-foreground">contact@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium text-foreground">Phone</h3>
                                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-medium text-foreground">Address</h3>
                                    <p className="text-muted-foreground">
                                        123 Business Street
                                        <br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg p-6">
                        {submitted ? (
                            <div className="text-center py-12">
                                <h3 className="text-2xl font-medium text-foreground mb-2">
                                    Thank you for your message!
                                </h3>
                                <p className="text-muted-foreground">
                                    We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name} onChange={handleChange}

                                        required
                                        className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email} onChange={handleChange}
                                        required
                                        className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const About = () => {
    return (
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="space-y-8 max-w-3xl mx-auto">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                  About Me
                </span>
              </div>
  
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Full stack,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  full ownership.
                </span>
              </h2>
  
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm a software engineer with full-stack capabilities and a focus on front-end development. I'm passionate about building beautiful, functional, and user-centered digital experiences and equally invested in the product thinking behind them. I take end-to-end ownership of my work, from initial concept through deployment and beyond.
                </p>
                <p>
                  I specialize in React, Next.js, and TypeScript, and integrate AI-powered tools like Windsurf and Cursor into my daily workflow to work faster and smarter. I bring a comprehensive perspective to every project, balancing technical precision with a deep consideration for user experience, edge cases, and performance with the goal of creating streamlined products that empower the people who use them.
                </p>
              </div>
              {/* Headshot */}
          <div className="mt-8 mb-12 flex flex-col items-center animate-fade-in animation-delay-300">
            <div className="glass rounded-2xl w-56 h-56">
              <img
                src="/headshot.jpg"
                alt="Headshot"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
  
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not just
                  functional, but truly delightful — products that users love to
                  use and developers love to maintain."
                </p>
              </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
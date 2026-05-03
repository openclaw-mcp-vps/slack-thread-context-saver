export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Engineering Teams &amp; Project Managers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Save Slack thread context<br />
          <span className="text-[#58a6ff]">before it gets buried</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ThreadVault connects to Slack via OAuth, monitors your channels, and automatically saves important threads to a searchable knowledge base — with AI-powered tagging so you find them instantly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Saving Threads — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to connect Slack.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔗</div>
            <h3 className="font-semibold text-white mb-1">Slack OAuth Connect</h3>
            <p className="text-sm text-[#8b949e]">One-click connect to your workspace. Monitor any channel you choose.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI-Powered Tagging</h3>
            <p className="text-sm text-[#8b949e]">Threads are automatically categorized and tagged so nothing slips through.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-1">Instant Search</h3>
            <p className="text-sm text-[#8b949e]">Full-text search across all saved threads. Find any decision in seconds.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack channels monitored",
              "AI tagging &amp; categorization",
              "Full-text search knowledge base",
              "Reaction &amp; keyword triggers",
              "Export to Notion / Confluence",
              "Priority email support"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does ThreadVault decide which threads to save?</h3>
            <p className="text-sm text-[#8b949e]">You configure triggers — specific emoji reactions (e.g. 📌 or ⭐) or keywords. Any thread matching your rules is automatically captured and saved to your knowledge base.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my Slack data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. ThreadVault uses Slack's official OAuth and only reads the channels you explicitly authorize. Data is encrypted at rest and never shared with third parties.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export my saved threads?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Pro subscribers can export to Notion, Confluence, or plain Markdown at any time. Your knowledge base is always yours.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} ThreadVault. All rights reserved.
      </footer>
    </main>
  );
}

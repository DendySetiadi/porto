"use client";

import { useState } from 'react';

type ResultType = {
  preprocessed: string;
  aspect: string;
  sentiment: string;
};

export default function DemoPage() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // GANTI dengan URL Space Hugging Face Anda
  const API_URL = 'https://dendysetiadi-dendy-sentiment-absa.hf.space/api/predict';
  const examples = [
    "Permainan timnas Indonesia sangat bagus hari ini",
    "Bangga dengan semangat suporter Indonesia!",
    "Menang 3-0! Indonesia juara grup!",
    "Pemain Indonesia main buruk dan kalah telak"
  ];

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setError('Please enter text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [text] }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();

      // Gradio API returns: {data: [preprocessed, aspect, sentiment]}
      setResult({
        preprocessed: data.data[0],
        aspect: data.data[1],
        sentiment: data.data[2]
      });
    } catch (err) {
      setError('An error occurred. Make sure the model is running on Hugging Face.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (sentiment?: string) => {
    if (!sentiment) return 'text-gray-400';
    const s = sentiment.toLowerCase();
    if (s.includes('positif') || s.includes('positive')) return 'text-green-400';
    if (s.includes('negatif') || s.includes('negative')) return 'text-red-400';
    return 'text-yellow-400';
  };

  const getSentimentBadge = (sentiment?: string) => {
    if (!sentiment) return 'bg-gray-500/20 text-gray-400';
    const s = sentiment.toLowerCase();
    if (s.includes('positif') || s.includes('positive')) return 'bg-green-500/20 text-green-400';
    if (s.includes('negatif') || s.includes('negative')) return 'bg-red-500/20 text-red-400';
    return 'bg-yellow-500/20 text-yellow-400';
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white px-6 md:px-10 py-24">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
         ABSA Naive Bayes
      </h1>

      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
        This is a simple demonstration of the Aspect-Based Sentiment Analysis system 
        using the Naive Bayes algorithm for Instagram comments about the 
        Indonesian National Football Team.
      </p>

      {/* DEMO BOX */}
      <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-xl max-w-3xl mx-auto shadow-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6">Try the Model</h2>

        {/* INPUT */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Instagram comment about Timnas Indonesia..."
          className="w-full p-4 rounded-lg bg-[#242424] text-white border border-white/10 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition mb-4"
          rows={5}
        />

        {/* QUICK EXAMPLES */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Quick examples:</p>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setText(ex)}
                className="text-xs px-3 py-1.5 bg-[#242424] hover:bg-[#2a2a2a] border border-white/5 rounded-lg transition text-gray-300"
              >
                {ex.slice(0, 30)}...
              </button>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button 
          onClick={analyzeSentiment}
          disabled={loading || !text.trim()}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition w-full ${
            loading || !text.trim()
              ? 'bg-gray-700 cursor-not-allowed text-gray-500'
              : 'bg-red-500 hover:bg-red-600 active:scale-[0.98]'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Analyzing...
            </span>
          ) : (
            'Analyze Sentiment'
          )}
        </button>

        {/* ERROR */}
        {error && (
          <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
            <p className="text-red-400">⚠️ {error}</p>
          </div>
        )}

        {/* OUTPUT */}
        {result ? (
          <div className="mt-6 space-y-4">
            {/* Sentiment & Aspect */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#242424] rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Sentiment</p>
                <p className={`text-2xl font-bold ${getSentimentColor(result.sentiment)}`}>
                  {result.sentiment}
                </p>
              </div>
              
              <div className="p-4 bg-[#242424] rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Aspect</p>
                <span className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${getSentimentBadge(result.sentiment)}`}>
                  {result.aspect}
                </span>
              </div>
            </div>

            {/* Preprocessed Text */}
            <div className="p-4 bg-[#242424] rounded-lg border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Preprocessed Text</p>
              <p className="text-gray-300 font-mono text-sm break-words">
                {result.preprocessed}
              </p>
            </div>

            {/* Original Text */}
            <div className="p-4 bg-[#242424] rounded-lg border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Original Text</p>
              <p className="text-gray-300">
                {text}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 p-4 bg-[#242424] rounded-lg border border-white/10">
            <p className="text-gray-400 text-center">Sentiment output will appear here.</p>
          </div>
        )}
      </div>

      {/* INFO CARDS */}
      <div className="max-w-3xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-bold mb-1">3 Aspects</h3>
          <p className="text-sm text-gray-400">Performance, Support, Match Results</p>
        </div>
        
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">🤖</div>
          <h3 className="font-bold mb-1">LDA + Naive Bayes</h3>
          <p className="text-sm text-gray-400">Topic Modeling & Classification</p>
        </div>
        
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-white/10">
          <div className="text-2xl mb-2">🇮🇩</div>
          <h3 className="font-bold mb-1">Bahasa Indonesia</h3>
          <p className="text-sm text-gray-400">Sastrawi NLP Processing</p>
        </div>
      </div>

      {/* METHODOLOGY */}
      <div className="max-w-3xl mx-auto mt-8 bg-[#1a1a1a] p-6 rounded-lg border border-white/10">
        <h3 className="text-xl font-bold mb-4">Methodology</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex gap-3">
            <span className="text-red-500 font-bold">1.</span>
            <div>
              <span className="font-semibold">Preprocessing:</span> Text cleaning, tokenization, slang normalization, stopword removal, and stemming using Sastrawi
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-red-500 font-bold">2.</span>
            <div>
              <span className="font-semibold">Topic Modeling:</span> LDA (Latent Dirichlet Allocation) extracts 3 main aspects from the text
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-red-500 font-bold">3.</span>
            <div>
              <span className="font-semibold">Classification:</span> Separate Naive Bayes models for each aspect to determine sentiment (positive/negative)
            </div>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center mt-12">
        <a 
          href="/"
          className="text-red-400 hover:text-red-300 text-lg transition inline-flex items-center gap-2"
        >
          ← Back to Home
        </a>
      </div>

    </main>
  );
}
import { knowledgeBase, KnowledgeEntry } from '../data/knowledgeBase';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: string;
}

function normalizeText(text: string): string {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
}

function calculateRelevance(query: string, entry: KnowledgeEntry): number {
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(/\s+/);
  
  let score = 0;
  
  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalizeText(keyword);
    
    // Exact match in query (high weight)
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.split(/\s+/).length * 3;
    }
    
    // Individual keyword words match
    const keywordWords = normalizedKeyword.split(/\s+/);
    for (const kw of keywordWords) {
      if (kw.length > 2) {
        // Exact word match
        if (queryWords.includes(kw)) {
          score += 2;
        }
        // Partial word match
        else if (queryWords.some(qw => qw.includes(kw) || kw.includes(qw))) {
          score += 1;
        }
      }
    }
  }
  
  // Bonus for longer keyword matches (more specific)
  const matchedKeywords = entry.keywords.filter(kw => 
    normalizedQuery.includes(normalizeText(kw))
  );
  if (matchedKeywords.length > 1) {
    score += matchedKeywords.length;
  }
  
  return score;
}

export function getBotResponse(userMessage: string): { text: string; category: string } {
  const normalizedQuery = normalizeText(userMessage);
  
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return {
      text: "Maaf, saya tidak mengerti pertanyaan Anda. Bisa tolong diperjelas? Saya bisa membantu Anda dengan topik seputar pengembangan video pembelajaran fisika. 🎓\n\nCoba tanyakan tentang:\n• Software editing video\n• Desain instruksional\n• Animasi konsep fisika\n• Teknik recording\n• Atau topik lainnya!",
      category: "pengantar"
    };
  }
  
  // Calculate relevance scores for all entries
  const scores = knowledgeBase.map(entry => ({
    entry,
    score: calculateRelevance(userMessage, entry)
  }));
  
  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  
  // Return best match if score > 0
  if (scores[0].score > 0) {
    return {
      text: scores[0].entry.response,
      category: scores[0].entry.category
    };
  }
  
  // Default response with more helpful suggestions
  return {
    text: `Hmm, saya belum memiliki informasi spesifik tentang "${userMessage}". 🤔\n\nTapi jangan khawatir! Saya bisa membantu Anda dengan berbagai topik seputar pengembangan video pembelajaran fisika. Coba tanyakan tentang:\n\n**🎬 Software & Tools**\n→ "Software apa yang cocok untuk membuat video fisika?"\n→ "Bagaimana cara menggunakan Manim?"\n→ "Tutorial Blender untuk fisika"\n\n**📋 Desain Instruksional**\n→ "Bagaimana membuat storyboard?"\n→ "Apa itu prinsip Mayer?"\n→ "Cara merumuskan tujuan pembelajaran"\n\n**🎥 Teknik Produksi**\n→ "Cara merekam video pembelajaran"\n→ "Tips editing video"\n→ "Animasi konsep fisika"\n\n**📐 Konten Fisika**\n→ "Video tentang mekanika"\n→ "Visualisasi listrik magnet"\n→ "Animasi fisika modern"\n\n**📚 Pedagogi**\n→ "Miskonsepsi fisika"\n→ "Strategi pembelajaran"\n→ "Asesmen dalam video"\n\nSilakan coba dengan kata kunci yang berbeda! 😊`,
    category: "pengantar"
  };
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function formatMarkdown(text: string): string {
  // Code blocks (must be first to avoid conflicts)
  let formatted = text.replace(/```([\s\S]*?)```/g, '<code class="code-block">$1</code>');
  
  // Bold
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  formatted = formatted.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  
  // Inline code
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  
  // Horizontal rules (━━━)
  formatted = formatted.replace(/━+/g, '<hr class="border-gray-700 my-2"/>');
  
  // Tables (simple formatting)
  formatted = formatted.replace(/\|(.+)\|/g, (match) => {
    const cells = match.split('|').filter(c => c.trim());
    if (cells.every(c => /^[\s-]+$/.test(c))) return ''; // Skip separator rows
    const row = cells.map(c => `<span class="inline-block px-2 py-0.5">${c.trim()}</span>`).join('');
    return `<div class="flex flex-wrap gap-1 text-xs bg-gray-900/50 rounded my-0.5">${row}</div>`;
  });
  
  // Line breaks
  formatted = formatted.replace(/\n/g, '<br/>');
  
  return formatted;
}

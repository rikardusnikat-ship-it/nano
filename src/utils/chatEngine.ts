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
    
    // Exact match in query
    if (normalizedQuery.includes(normalizedKeyword)) {
      score += normalizedKeyword.split(/\s+/).length * 2;
    }
    
    // Individual keyword words match
    const keywordWords = normalizedKeyword.split(/\s+/);
    for (const kw of keywordWords) {
      if (kw.length > 2 && queryWords.some(qw => qw.includes(kw) || kw.includes(qw))) {
        score += 1;
      }
    }
  }
  
  return score;
}

export function getBotResponse(userMessage: string): { text: string; category: string } {
  const normalizedQuery = normalizeText(userMessage);
  
  if (!normalizedQuery || normalizedQuery.length < 2) {
    return {
      text: "Maaf, saya tidak mengerti pertanyaan Anda. Bisa tolong diperjelas? Saya bisa membantu Anda dengan topik seputar pengembangan video pembelajaran fisika. 🎓",
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
  
  // Default response
  return {
    text: `Saya belum memiliki informasi spesifik tentang "${userMessage}". Namun, saya bisa membantu Anda dengan topik-topik berikut:\n\n• 🎬 Software & tools pembuatan video\n• 📋 Desain instruksional & storyboard\n• 🎥 Teknik recording & editing\n• 📐 Konten fisika (mekanika, listrik, gelombang, dll)\n• 📚 Strategi pedagogi & miskonsepsi\n• 📤 Platform distribusi video\n• 💡 Tips & best practices\n• 🔬 Referensi penelitian\n\nSilakan coba tanyakan dengan kata kunci yang berbeda! 😊`,
    category: "pengantar"
  };
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function formatMarkdown(text: string): string {
  // Bold
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Code blocks
  formatted = formatted.replace(/```([\s\S]*?)```/g, '<code class="code-block">$1</code>');
  // Inline code
  formatted = formatted.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');
  // Line breaks
  formatted = formatted.replace(/\n/g, '<br/>');
  
  return formatted;
}

export type StickerPackage = {
  id: string;
  name: string;
  shortQuantity: string;
  quantity: string;
  description: string;
  price: string;
  checkoutUrl: string;
  badge?: string;
};

export const store = {
  name: "Figurinhas da Copa",
  whatsapp: "5564999999999",
};

export const stickerPackages: StickerPackage[] = [
  {
    id: "basico",
    name: "10 Envelopes de Figurinha da Copa do Mundo 2026",
    shortQuantity: "10 envelopes",
    quantity: "10 envelopes de figurinha da Copa do Mundo 2026",
    description:
      "Na promoção Figurinhas da Copa do Mundo, você garante pacotes com figurinhas de qualidade para montar sua seleção, trocar com os amigos e viver a experiência completa de colecionar. Comprando o combo com 10 pacotes, você economiza mais e aumenta suas chances de completar o álbum mais rápido.",
    price: "R$ 39,90",
    checkoutUrl: "https://checkoutseguro.ru/checkout/cmq03v84a03b401q0td7g38bl?offer=6S06JBL",
  },
  {
    id: "colecionador",
    name: "10 Envelopes de Figurinha LEGENDS da Copa do Mundo 2026",
    shortQuantity: "10 envelopes",
    quantity: "10 envelopes de figurinha LEGENDS da Copa do Mundo 2026",
    description:
      "Na promoção Legends — Ídolos Eternos, você leva 10 pacotes selecionados com os maiores craques da história do futebol mundial.\n\nE o melhor:\n\nCada pacote contém 1 figurinha Legend garantida.\n\nIsso mesmo. São 10 pacotes e 10 chances reais de completar sua coleção com ídolos lendários.",
    price: "R$ 79,90",
    checkoutUrl: "https://checkoutseguro.ru/checkout/cmq04lean04nc01psz77kxrpt?offer=NJ5TAEA",
    badge: "Legends",
  },
];

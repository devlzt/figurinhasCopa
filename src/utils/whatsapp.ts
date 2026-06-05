import { store, type StickerPackage } from "../data/packages";

const baseMessage =
  "Olá! Quero comprar pacotes de figurinhas da Copa. Quais ainda estão disponíveis?";

export function createWhatsAppUrl(message = baseMessage) {
  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function createPackageMessage(pkg: StickerPackage) {
  return `Olá! Tenho interesse no pacote "${pkg.name}" por ${pkg.price}. Ainda está disponível?`;
}

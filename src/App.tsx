import {
  BadgeCheck,
  Quote,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { stickerPackages, store, type StickerPackage } from "./data/packages";

const heroStats = [
  "Pacotes fechados, sem venda por número",
  "Retirada ou entrega combinada",
  "Pagamento via Pix",
];

const packageImages: Record<string, string> = {
  basico: "/reviews/produto-copa-2026.png",
  colecionador: "/reviews/produto-legends-2026.png",
};

const reviews = [
  {
    name: "Marcos A.",
    image: "/reviews/avaliacao-1.png",
    text: "Peguei 10 envelopes para abrir no fim de semana. Atendimento rápido e compra finalizada sem complicação.",
    packageName: "10 envelopes",
  },
  {
    name: "Camila R.",
    image: "/reviews/avaliacao-2.png",
    text: "Comprei uma quantidade maior e retirei tudo certinho. Bom para quem quer abrir vários pacotes de uma vez.",
    packageName: "Legends",
  },
  {
    name: "João P.",
    image: "/reviews/avaliacao-3.png",
    text: "Chamei para confirmar o estoque e já deixei reservado. Foi simples para pagar no Pix e buscar.",
    packageName: "10 envelopes",
  },
  {
    name: "Renata S.",
    image: "/reviews/avaliacao-4.png",
    text: "Os pacotes estavam prontos e deu para combinar entrega rapidinho. Ajuda muito quem quer completar o álbum.",
    packageName: "Legends",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 text-center">
          <p className="text-sm font-black text-ocean">Foto autorizada do cliente</p>
        </div>
        <img
          src={review.image}
          alt={`Foto enviada por cliente sobre ${review.packageName}`}
          className="relative h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex gap-1 rounded-full bg-white/95 px-3 py-2 text-sun shadow-sm">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
      </div>
      <div className="p-5">
        <Quote className="text-ocean" size={24} aria-hidden="true" />
        <p className="mt-3 text-sm leading-6 text-slate-600">{review.text}</p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="font-black text-ink">{review.name}</p>
          </div>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-pitch">
            {review.packageName}
          </span>
        </div>
      </div>
    </article>
  );
}

function StockPhotoHero() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
        <div className="relative overflow-hidden rounded-[1.35rem] border-4 border-white bg-white shadow-soft">
          <img
            src="/reviews/avaliacao-4.png"
            alt="Pacotes de figurinhas disponíveis para venda"
            className="h-[420px] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white">
            <p className="text-sm font-black uppercase">estoque real</p>
            <p className="mt-1 text-2xl font-black leading-tight">ENVELOPES PRONTOS PARA VENDA</p>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="overflow-hidden rounded-[1.1rem] border-4 border-white bg-white shadow-lg">
            <img
              src="/reviews/avaliacao-1.png"
              alt="Pacotes de figurinhas separados por cliente"
              className="h-[203px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[1.1rem] border-4 border-white bg-white shadow-lg">
            <img
              src="/reviews/avaliacao-3.png"
              alt="Envelopes de figurinhas organizados para entrega"
              className="h-[203px] w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-soft">
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-black text-ink sm:justify-between">
          <span className="text-pitch">Estoque disponível</span>
          <span>Pix</span>
          <span>Retirada ou entrega</span>
        </div>
      </div>
    </div>
  );
}

function PackageCard({ pkg, featured }: { pkg: StickerPackage; featured: boolean }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[1.25rem] border bg-white p-5 shadow-soft transition hover:-translate-y-1 ${
        featured ? "border-sun ring-4 ring-yellow-100" : "border-slate-200"
      }`}
    >
      {pkg.badge && (
        <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-sun px-3 py-1 text-xs font-black text-ink">
          <Sparkles size={14} aria-hidden="true" />
          {pkg.badge}
        </span>
      )}
      <div className="mb-5 aspect-[1448/1086] overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={packageImages[pkg.id]}
          alt={`${pkg.name} com envelopes de figurinhas`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-black text-ink">{pkg.name}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{pkg.description}</p>
      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-bold text-ocean">{pkg.quantity}</p>
        <p className="mt-1 text-3xl font-black text-ink">{pkg.price}</p>
      </div>
      <a
        href={pkg.checkoutUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-pitch px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-700"
      >
        <ShoppingBag size={19} aria-hidden="true" />
        Compre Agora
      </a>
    </article>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-ink">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,#fff6bf,transparent_30%),linear-gradient(135deg,#ffffff_0%,#eef8ff_54%,#eaf8ef_100%)]">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pitch via-sun to-ocean" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-7 text-sm font-black text-ink sm:px-6 lg:px-8">
          <span>{store.name}</span>
          <span className="hidden text-pitch sm:inline">Compra online</span>
        </div>
        <div className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-bold text-pitch shadow-sm">
              <BadgeCheck size={17} aria-hidden="true" />
              Estoque real, chama e eu confirmo
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              Pacotes de figurinhas da Copa para comprar hoje
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Tenho envelopes fechados disponíveis. Escolha o pacote, clique em comprar e finalize seu pedido com segurança.
            </p>
            <div className="mt-6 grid gap-2 text-sm font-bold text-slate-700 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-3 shadow-sm">
                  <BadgeCheck className="shrink-0 text-pitch" size={18} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pacotes"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ocean/20 bg-white px-6 py-3 text-sm font-extrabold text-ocean transition hover:border-ocean/40 hover:bg-blue-50"
              >
                <ShoppingBag size={19} aria-hidden="true" />
                Ver preços dos pacotes
              </a>
            </div>
          </div>
          <StockPhotoHero />
        </div>
      </section>

      <section id="pacotes" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-pitch">Pacotes disponíveis</p>
            <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Escolha seu pacote</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Todos são pacotes fechados. Me chama antes para confirmar o que ainda tem disponível no estoque.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {stickerPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} featured={pkg.id === "colecionador"} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-pitch">Avaliações de clientes</p>
              <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">Quem comprou já garantiu os pacotes</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Fotos reais enviadas por clientes que compraram envelopes para completar a coleção.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard key={review.image} review={review} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-black text-ink">{store.name}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

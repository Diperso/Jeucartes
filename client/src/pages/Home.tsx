/**
 * Direction « Clair de lune & marbre » : une page éditoriale intime,
 * en ivoire, rose poudré, cacao et or mat. Les photos fournies sont le
 * point de vérité produit ; les motifs de croissant restent discrets.
 */
import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Heart,
  HeartHandshake,
  Mail,
  MoonStar,
  Search,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  {
    index: "01",
    title: "Introspection\npartagée",
    accent: "ivory",
    icon: Search,
    description:
      "Pour prendre le temps de réfléchir à soi, à sa spiritualité et aux chemins que vous souhaitez faire grandir ensemble.",
    image: "/assets/images/reconnector-introspection.jpg",
  },
  {
    index: "02",
    title: "À cœurs\nouverts",
    accent: "blush",
    icon: Heart,
    description:
      "Des questions sincères pour échanger en profondeur, mieux s’écouter et se reconnecter avec bienveillance.",
    image: "/assets/images/reconnector-coeurs.jpg",
  },
  {
    index: "03",
    title: "Raviver la\nSunnah",
    accent: "terra",
    icon: MoonStar,
    description:
      "Des défis et des actions inspirés du Coran et de la Sunnah, à mettre en pratique à deux, simplement.",
    image: "/assets/images/reconnector-sunnah.jpg",
  },
  {
    index: "04",
    title: "Have\nFun",
    accent: "taupe",
    icon: Sparkles,
    description:
      "Quinze cartes plus légères, entre petits défis et quiz, pour vous offrir aussi le plaisir de rire ensemble.",
    image: "/assets/images/reconnector-have-fun.jpg",
  },
];

const HIGHLIGHTS = [
  "Favorise des échanges profonds et apaisés",
  "Encourage des actes d’adoration partagés",
  "Crée un rituel simple à deux, à votre rythme",
];

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const root = document.documentElement;
    let identifiedAsHonorMagicV3 = /honor|magic v3|bvl-n49|fcp-n49/i.test(navigator.userAgent);
    const updateHonorMagicV3Mode = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const devicePixelRatio = window.devicePixelRatio || 1;
      const physicalWidth = Math.round(window.screen.width * devicePixelRatio);
      const physicalHeight = Math.round(window.screen.height * devicePixelRatio);
      const longSide = Math.max(physicalWidth, physicalHeight);
      const shortSide = Math.min(physicalWidth, physicalHeight);
      const matchesInternalMagicV3Panel = longSide >= 2250 && longSide <= 2450 && shortSide >= 2050 && shortSide <= 2250;
      const isOpenPortraitFoldable = viewportWidth >= 680 && viewportHeight > viewportWidth;

      root.dataset.honorMagicV3Open = String(
        isOpenPortraitFoldable && (identifiedAsHonorMagicV3 || matchesInternalMagicV3Panel),
      );
    };

    updateHonorMagicV3Mode();
    window.addEventListener("resize", updateHonorMagicV3Mode);
    window.addEventListener("orientationchange", updateHonorMagicV3Mode);
    window.addEventListener("pageshow", updateHonorMagicV3Mode);
    window.visualViewport?.addEventListener("resize", updateHonorMagicV3Mode);

    const navigatorWithUserAgentData = navigator as Navigator & {
      userAgentData?: { getHighEntropyValues?: (hints: string[]) => Promise<Record<string, string>> };
    };
    navigatorWithUserAgentData?.userAgentData
      ?.getHighEntropyValues?.(["model", "platform"])
      .then(({ model = "", platform = "" }) => {
        identifiedAsHonorMagicV3 ||= /honor|magic v3|bvl-n49|fcp-n49/i.test(`${model} ${platform}`);
        updateHonorMagicV3Mode();
      })
      .catch(() => undefined);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -11% 0px", threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHonorMagicV3Mode);
      window.removeEventListener("orientationchange", updateHonorMagicV3Mode);
      window.removeEventListener("pageshow", updateHonorMagicV3Mode);
      window.visualViewport?.removeEventListener("resize", updateHonorMagicV3Mode);
      delete root.dataset.honorMagicV3Open;
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#accueil" className="brand" aria-label="The Reconnector — accueil">
          <img
            src="/assets/images/reconnector-couple-mark.png"
            alt="Symbole The Reconnector"
            className="brand-mark"
          />
          <span className="brand-lockup">
            <span className="brand-the">Édition couples</span>
            <span className="brand-name">The Reconnector</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#le-jeu">Le jeu</a>
          <a href="#univers">Les univers</a>
          <a href="#commander">Commander</a>
        </nav>

        <a href="#commander" className="header-cta">
          Découvrir l’édition <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </header>

      <main id="accueil">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-stone" aria-hidden="true" />
          <div className="hero-moon" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow light-eyebrow">Édition couples</p>
            <h1 id="hero-title">
              Se parler autrement.<br />
              <em>Se rapprocher d’Allah,</em><br />
              ensemble.
            </h1>
            <p className="hero-copy">
              Un jeu de cartes imaginé pour nourrir le lien, ouvrir les cœurs et faire de votre couple un chemin vers Allah, bi idhnillah.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#commander">
                Commander le jeu <ArrowDownRight size={18} strokeWidth={1.8} />
              </a>
              <a className="text-link light-link" href="#le-jeu">
                Découvrir le concept <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="hero-product-wrap" aria-label="Le coffret et les quatre catégories de cartes The Reconnector">
            <div className="crescent-orbit orbit-one" aria-hidden="true" />
            <img
              src="/assets/images/reconnector-collection.jpg"
              alt="Le jeu The Reconnector avec ses quatre catégories de cartes"
              className="hero-product"
            />
            <div className="hero-stamp">
              <span>150</span>
              <small>cartes à<br />partager</small>
            </div>
          </div>

          <a href="#le-jeu" className="scroll-note" aria-label="Faire défiler vers le jeu">
            <span>Défiler pour entrer dans le rituel</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="stat-band" aria-label="En quelques chiffres" data-reveal="up">
          <div className="stat-item">
            <span>150</span>
            <p>cartes pour prendre le temps de vous retrouver</p>
          </div>
          <div className="stat-separator" aria-hidden="true" />
          <div className="stat-item">
            <span>4</span>
            <p>univers pour converser, agir et sourire à deux</p>
          </div>
          <div className="stat-separator" aria-hidden="true" />
          <div className="stat-item">
            <span>1</span>
            <p>intention : grandir l’un auprès de l’autre</p>
          </div>
        </section>

        <section id="le-jeu" className="intro-section section-frame" aria-labelledby="intro-title">
          <div className="intro-art art-arch" data-reveal="left">
            <img
              src="/assets/images/reconnector-arch-ritual.jpg"
              alt="Ambiance de lumière douce et de marbre, inspirée du rituel de jeu"
              loading="lazy"
            />
            <div className="art-caption">À deux, sans écran, sans précipitation.</div>
          </div>
          <div className="intro-copy" data-reveal="right">
            <p className="eyebrow">Un jeu, mais surtout un moment</p>
            <h2 id="intro-title">L’amour se construit aussi dans les mots que l’on choisit de partager.</h2>
            <p>
              The Reconnector n’est pas un simple jeu de discussion. Il invite chacun à se déposer, à écouter et à agir, dans une intimité guidée par les valeurs de l’Islam.
            </p>
            <p>
              Piochez une carte quand le quotidien a besoin de douceur, quand un sujet mérite d’être abordé ou simplement quand vous voulez créer un beau souvenir à deux.
            </p>
            <a href="#univers" className="text-link dark-link">
              Explorer les quatre univers <ArrowDownRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        </section>

        <section id="univers" className="univers-section" aria-labelledby="univers-title">
          <div className="univers-heading section-frame" data-reveal="up">
            <div>
              <p className="eyebrow">Les 4 univers du jeu</p>
              <h2 id="univers-title">Chaque carte ouvre une porte différente.</h2>
            </div>
            <p>
              Une sélection pensée pour que chaque moment partagé puisse devenir une attention, un échange ou une action qui compte.
            </p>
          </div>

          <div className="category-rail" data-reveal="cards">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <article className={`category-card ${category.accent}`} key={category.index}>
                  <div className="category-topline">
                    <span>{category.index}</span>
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3>{category.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{category.description}</p>
                  <div className="category-image-wrap">
                    <img src={category.image} alt={`Cartes ${category.title.replace("\n", " ")} de The Reconnector`} loading="lazy" />
                  </div>
                  <div className="card-base-line" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="quote-section" aria-labelledby="quote-title">
          <div className="quote-stone" aria-hidden="true" />
          <div className="quote-frame" data-reveal="left">
            <img
              src="/assets/images/reconnector-marble-detail.jpg"
              alt="Détail de marbre ivoire et de lumière dorée"
              loading="lazy"
            />
          </div>
          <div className="quote-copy" data-reveal="right">
            <span className="quote-moon"><MoonStar size={20} strokeWidth={1.45} /></span>
            <p className="eyebrow">La force des petits rituels</p>
            <h2 id="quote-title">« Et parmi Ses signes, Il a créé de vous, pour vous, des épouses afin que vous trouviez auprès d’elles tranquillité. »</h2>
            <p className="quote-source">Coran, Ar-Rûm — 30:21</p>
          </div>
        </section>

        <section className="ritual-section section-frame" aria-labelledby="ritual-title">
          <div className="ritual-copy" data-reveal="left">
            <p className="eyebrow">Une carte, un moment pour vous</p>
            <h2 id="ritual-title">Votre rituel peut être aussi simple que cela.</h2>
            <ol className="ritual-steps">
              <li>
                <span>01</span>
                <div><h3>Choisissez l’instant</h3><p>Après le repas, avant de dormir ou à tout autre moment où vous avez envie de vous retrouver.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Piochez une carte</h3><p>Laissez la question, le défi ou l’invitation vous guider avec douceur.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Accueillez ce qui vient</h3><p>Écoutez, partagez et, lorsque la carte le propose, passez à l’action ensemble.</p></div>
              </li>
            </ol>
          </div>
          <div className="ritual-visual" data-reveal="right">
            <div className="ritual-halo" aria-hidden="true" />
            <div className="ritual-card card-cream"><Search size={28} strokeWidth={1.2} /><span>Introspection<br />partagée</span></div>
            <div className="ritual-card card-rose"><Heart size={25} strokeWidth={1.2} /><span>À cœurs<br />ouverts</span></div>
            <div className="ritual-card card-terra"><MoonStar size={25} strokeWidth={1.2} /><span>Raviver la<br />Sunnah</span></div>
            <div className="ritual-card card-taupe"><Sparkles size={25} strokeWidth={1.2} /><span>Have<br />Fun</span></div>
          </div>
        </section>

        <section id="commander" className="order-section" aria-labelledby="order-title">
          <div className="order-frame">
            <div className="order-copy" data-reveal="left">
              <p className="eyebrow light-eyebrow">Un rituel à recevoir</p>
              <h2 id="order-title">Offrez-vous un peu plus de présence.</h2>
              <p>
                Un coffret de 150 cartes pour faire de chaque conversation une occasion de vous rapprocher, l’un de l’autre et d’Allah.
              </p>
              <ul className="highlight-list">
                {HIGHLIGHTS.map((item) => <li key={item}><Check size={17} strokeWidth={1.7} />{item}</li>)}
              </ul>
            </div>
            <aside className="order-panel" aria-label="Informations de commande" data-reveal="right">
              <p className="panel-label">Un coffret à recevoir</p>
              <div className="price" aria-label="29 euros et 90 centimes">
                <span className="price-major">29</span>
                <span className="price-detail">,90&nbsp;€</span>
              </div>
              <p className="panel-note">Un premier pas vers de nouveaux moments de présence, à deux et pour Allah.</p>
              <a className="btn btn-dark" href="mailto:amel.taarabit@gmail.com?subject=Commande%20The%20Reconnector">
                Commencer notre rituel <Mail size={17} strokeWidth={1.8} />
              </a>
              <div className="order-divider" aria-hidden="true" />
              <p className="delivery-note"><HeartHandshake size={18} strokeWidth={1.45} /> Remise en main propre possible à Riyadh.</p>
              <a className="panel-link" href="mailto:amel.taarabit@gmail.com?subject=Question%20sur%20The%20Reconnector">Recevoir le jeu ou poser une question ? <ArrowUpRight size={14} /></a>
            </aside>
          </div>
        </section>

        <section className="faq-section section-frame" aria-labelledby="faq-title">
          <div className="faq-intro" data-reveal="left">
            <p className="eyebrow">Avant de vous retrouver</p>
            <h2 id="faq-title">Avant de commencer votre rituel.</h2>
          </div>
          <div className="faq-list" data-reveal="right">
            <details open>
              <summary>À qui s’adresse le jeu ?<span>+</span></summary>
              <p>À tous les couples qui souhaitent entretenir leur lien, mieux communiquer et cheminer ensemble dans leur foi.</p>
            </details>
            <details>
              <summary>Peut-on jouer sans occasion particulière ?<span>+</span></summary>
              <p>Oui. Le jeu est pensé pour rejoindre les moments ordinaires : une soirée calme, un trajet, un week-end ou le besoin de se parler autrement.</p>
            </details>
            <details>
              <summary>Comment commander ?<span>+</span></summary>
              <p>Écrivez directement à l’adresse indiquée. Le paiement est possible par PayPal entre proches et une remise en main propre est proposée à Riyadh.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-reveal="up">
        <a href="#accueil" className="footer-brand">
          <img className="footer-mark" src="/assets/images/reconnector-couple-mark.png" alt="" />
          <span className="brand-lockup">
            <span className="brand-the">Édition couples</span>
            <span className="brand-name">The Reconnector</span>
          </span>
        </a>
        <p>À Allah, soit-Moi et c’est tout ce qui compte.</p>
        <a href="mailto:amel.taarabit@gmail.com">amel.taarabit@gmail.com</a>
      </footer>
    </div>
  );
}

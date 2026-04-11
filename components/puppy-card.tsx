import Link from "next/link";
import { site } from "@/lib/site";
import { Puppy } from "@/lib/types";

const styles = `
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(30px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .lc-card {
    position: relative;
    width: 100%;
    min-height: 100%;
    border-radius: 24px;
    background: linear-gradient(170deg, #faf6ee 0%, #f3ead8 50%, #ede0c8 100%);
    box-shadow:
      0 2px 6px rgba(140,110,60,0.10),
      0 12px 40px rgba(140,110,60,0.18),
      0 40px 80px rgba(120,90,40,0.14);
    animation: cardIn 0.85s cubic-bezier(0.22,1,0.36,1) both;
    font-family: "Lato", sans-serif;
    display: flex;
  }
  .lc-inner {
    border-radius: 22px;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .lc-photo {
    position: relative;
    width: 100%;
    height: 290px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .lc-photo img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center 20%;
    display: block;
  }
  .lc-photo::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(240,230,200,0) 72%, rgba(237,224,200,0.78) 100%);
  }
  .lc-body {
    padding: 10px 20px 14px;
    text-align: center;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .lc-badge-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 7px;
  }
  .lc-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    border-radius: 100px;
    padding: 6px 13px;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #4b3c2d;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(120,96,72,0.12);
  }
  .lc-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border-radius: 100px;
    padding: 6px 14px;
    font-size: 10.5px;
    font-weight: 700;
    color: #5b4833;
    background: rgba(255,251,243,0.84);
    border: 1px solid rgba(120,96,72,0.12);
    box-shadow: none;
  }
  .lc-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #b49767;
    opacity: 0.9;
    flex-shrink: 0;
  }
  .lc-name {
    font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
    font-size: 38px;
    color: #4d4034;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin-bottom: 2px;
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: balance;
    font-weight: 500;
  }
  .lc-breed {
    font-size: 12.5px;
    font-weight: 400;
    letter-spacing: 0.12em;
    color: #7a6653;
    margin-bottom: 4px;
    text-transform: uppercase;
  }
  .lc-price {
    font-family: "Playfair Display", serif;
    font-size: 26px;
    font-weight: 500;
    color: #4d4034;
    margin-bottom: 10px;
    font-variant-numeric: tabular-nums lining-nums;
    font-feature-settings: "tnum" 1, "lnum" 1;
    letter-spacing: 0.01em;
    text-rendering: optimizeLegibility;
  }
  .lc-actions {
    margin-top: auto;
  }
  .lc-btn-reserve {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 100px;
    background: linear-gradient(135deg, #c9a84c 0%, #e8d08a 35%, #b8963c 65%, #d4a850 100%);
    color: #1a1000;
    font-family: "Lato", sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-align: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(180,140,50,0.25), inset 0 1px 0 rgba(255,255,255,0.3);
    margin-bottom: 8px;
  }
  .lc-btn-wa {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 100%;
    padding: 9px 16px;
    border-radius: 100px;
    background: linear-gradient(135deg, #1fbe5a 0%, #25d366 45%, #20c35e 100%);
    color: #fff;
    font-family: "Lato", sans-serif;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    border: none;
    box-shadow: 0 2px 8px rgba(37,211,102,0.24), 0 6px 18px rgba(37,211,102,0.14), inset 0 1px 0 rgba(255,255,255,0.25);
    opacity: 0.96;
  }
  .lc-wa-icon {
    width: 18px;
    height: 18px;
    fill: #fff;
    flex-shrink: 0;
  }
  .lc-footer {
    padding: 0;
  }
  @media (max-width: 640px) {
    .lc-photo {
      height: 220px;
    }
    .lc-body {
      padding: 9px 14px 12px;
    }
    .lc-name {
      font-size: 32px;
      min-height: 52px;
    }
    .lc-price {
      font-size: 22px;
    }
    .lc-btn-reserve {
      padding: 9px;
      margin-bottom: 7px;
      font-size: 12px;
    }
    .lc-btn-wa {
      padding: 8px 12px;
      font-size: 11.5px;
    }
    .lc-tag,
    .lc-badge {
      font-size: 9px;
    }
  }
`;

function buildPlaceholderImage(puppy: Puppy) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#faf6ee" />
          <stop offset="50%" stop-color="#f3ead8" />
          <stop offset="100%" stop-color="#ede0c8" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#fff9ef" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="720" height="720" fill="url(#bg)" />
      <rect width="720" height="720" fill="url(#glow)" />
      <ellipse cx="360" cy="585" rx="210" ry="60" fill="#dcc9a2" opacity="0.45" />
      <circle cx="360" cy="310" r="150" fill="#f7efde" stroke="#d8bc7e" stroke-width="6" />
      <circle cx="310" cy="265" r="42" fill="#f4e6cc" stroke="#d8bc7e" stroke-width="5" />
      <circle cx="410" cy="265" r="42" fill="#f4e6cc" stroke="#d8bc7e" stroke-width="5" />
      <circle cx="360" cy="338" r="126" fill="#fcf7ec" stroke="#d8bc7e" stroke-width="5" />
      <circle cx="318" cy="330" r="10" fill="#2d210d" />
      <circle cx="402" cy="330" r="10" fill="#2d210d" />
      <ellipse cx="360" cy="372" rx="18" ry="14" fill="#3c2b14" />
      <path d="M340 395 Q360 412 380 395" stroke="#6a5030" stroke-width="6" stroke-linecap="round" fill="none" />
      <text x="50%" y="612" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#8b6a2f" letter-spacing="4">${puppy.color.toUpperCase()}</text>
      <text x="50%" y="655" text-anchor="middle" font-family="Georgia, serif" font-size="44" fill="#2a1a00">${puppy.name}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const WhatsAppIcon = () => (
  <svg className="lc-wa-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  const sizeLabel = `${puppy.sizeLabel} Pomeranian`;
  const whatsappNumber = site.phone.replace(/\D/g, "");
  const whatsappMsg = `Hi, I'm interested in ${puppy.name}. Please send more details.`;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
  const image = puppy.imageSrc ?? buildPlaceholderImage(puppy);

  return (
    <>
      <style>{styles}</style>

      <div className="lc-card">
        <div className="lc-inner">
          <div className="lc-photo">
            <img src={image} alt={puppy.name} />
          </div>

          <div className="lc-body">
            <div className="lc-badge-row">
              <div className="lc-tag">{puppy.gender}</div>
              <div className="lc-badge">
                <span className="lc-badge-dot" />
                Ready for Pickup
              </div>
            </div>

            <div className="lc-name">{puppy.name}</div>
            <div className="lc-breed">{sizeLabel}</div>
            <div className="lc-price">{puppy.price}</div>

            <div className="lc-actions">
              <Link href={`/puppies/${puppy.slug}`} className="lc-btn-reserve">
                View Puppy Details
              </Link>

              <a href={waUrl} className="lc-btn-wa" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

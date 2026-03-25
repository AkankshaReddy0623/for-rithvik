import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

const MEMORIES = [
  {
    id: 1,
    date: '31 · 10 · 2025',
    label: 'Halloween',
    caption: 'TEDx SNIST never happened but I don\'t regret working for it — because that\'s what made me meet you. Arts Club Room. You thought you were my year. You called us the "nerd best friends." On the last day of the month, I found my first forever.',
    color: '#2A1900',
    accent: '#F5C518',
    emoji: '🎃',
    side: 'left',
    media: 'public/photos/halloween.jpg',
    mediaType: 'image',
  },
  {
    id: 2,
    date: '02 · 11 · 2025',
    label: 'Cinematica Expo',
    caption: 'More bonding and fun time. We clicked really cute pictures and made fun vlogs, calling ourselves the "nerd group." Triple riding. The first time we shared a vehicle. I still absolutely hate you for posting that picture of me on your page.',
    color: '#001A10',
    accent: '#2DBDB1',
    emoji: '🎬',
    side: 'right',
    media: 'public/photos/ce.jpg',
    mediaType: 'image',
  },
  {
    id: 3,
    date: '08 · 11 · 2025',
    label: 'Write Club',
    caption: 'We tried to write a story together for the first time — little did we know the universe had already written one for us. This was also the first time we clicked a picture with just the two of us. So adorably awkward we look in those. You, especially.',
    color: '#140A1A',
    accent: '#E8527A',
    emoji: '✍️',
    side: 'left',
    media: 'public/photos/wc.jpg',
    mediaType: 'image',
  },
  {
    id: 4,
    date: '22 · 11 · 2025',
    label: 'Sreeotsav D2',
    caption: 'The first time we danced together. People caught us in the back, hand in hand, and cheered for us. You (awkwardly) gave me my first side-hug. The song shifted from Rooba Rooba to Kala Chashma and you pretended to know Baby\'s lyrics. You knew absolutely nothing. Sreeotsav D2 will forever hold a very special place in my heart.',
    color: '#1A0A00',
    accent: '#F5C518',
    emoji: '🕺',
    side: 'right',
    media: 'public/photos/sdt.jpg',
    mediaType: 'image',
  },
  {
    id: 5,
    date: '24 · 12 · 2025',
    label: 'Christmas Eve',
    caption: 'I filmed you for the very first time. Trust me, there\'s more to come — and that\'s a promise. We had such a lovely time and a great learning experience together. Only God knows when that video will come out though.',
    color: '#001A14',
    accent: '#2DBDB1',
    emoji: '📷',
    side: 'left',
    media: 'public/photos/bff.jpg',
    mediaType: 'image',
  },
  {
    id: 6,
    date: '01 · 01 · 2026',
    label: 'Undying Screening',
    caption: 'I saw you on-screen for the very first time. I couldn\'t have been any more impressed or proud — you were incredibly wonderful and I couldn\'t take my eyes off you even for a second. You were busy with people but I was simply admiring you from a distance. I cheered for you the loudest then and I know I\'ll always be your biggest supporter and loudest cheerleader.',
    color: '#0A0A1A',
    accent: '#E8527A',
    emoji: '🧟',
    side: 'right',
    media: 'public/photos/undying.jpg',
    mediaType: 'image',
  },
  {
    id: 7,
    date: '21 · 01 · 2026',
    label: 'Nari Nari Naduma Murari',
    caption: 'An almost first date. An almost literal "Nari Nari Naduma Murari" situation that thankfully did not happen. My dear boy had other plans and someone else on his mind. Dumbass. You put your head on my shoulder and I ruffled your hair. You watched the movie. I watched you. [Along with the movie of course, don\'t get mad now.]',
    color: '#1A0010',
    accent: '#F5C518',
    emoji: '🎥',
    side: 'left',
    media: 'public/photos/nnnm.jpg',
    mediaType: 'image',
  },
  {
    id: 8,
    date: '14 · 02 · 2026',
    label: 'Valentine\'s Day',
    caption: 'I got on your bike for the first time alone. It was when you properly confessed. You went from confusion to certainty within minutes. You made up your mind entirely that I am the one. You wished me Valentine\'s and cut the call exactly a minute before the date changed. This is it. We found our way to each other and stayed.',
    color: '#1A0008',
    accent: '#E8527A',
    emoji: '💌',
    side: 'right',
    media: 'public/photos/val.jpg',
    mediaType: 'image',
  },
  {
    id: 9,
    date: '20 · 02 · 2026',
    label: 'Kundeti Kommu',
    caption: 'Chinnayya on stage. I couldn\'t have been any more proud watching you perform. Every practice session, every late rehearsal — all of it led to this moment. I was in the audience, camera in hand, completely in my element. You were in yours.',
    color: '#001814',
    accent: '#2DBDB1',
    emoji: '🎭',
    side: 'left',
    media: 'public/photos/kk.jpg',
    mediaType: 'image',
  },
  {
    id: 10,
    date: '26 · 02 · 2026',
    label: 'Couple Friendly',
    caption: 'Our first actual date. If you ask me right now where I see myself in 10 years, I\'d say watching a movie with you — I\'ll watch you, you enjoy the movie. We\'ll cuddle and fall asleep together in a place we\'d call home. Spring feels like coming home after a bad day. You, my darling, are my spring.',
    color: '#1A1000',
    accent: '#F5C518',
    emoji: '🌼',
    side: 'right',
    media: 'public/photos/cf.jpg',
    mediaType: 'image',
  },
]

export default function L4_Memories() {
  const navigate = useNavigate()
  const { unlock } = useGame()

  const handleNext = () => {
    unlock(4)
    navigate('/compat')
  }

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 50% 0%, #1C0E00 0%, #080500 60%)',
        padding: '4rem 1.5rem 5rem',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          animation: 'fadeUp 0.7s ease both',
        }}
      >
        <span className="badge">Level 4</span>
        <h2
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#F5C518',
            marginTop: '0.75rem',
            marginBottom: '0.4rem',
          }}
        >
          Memory Lane 📸
        </h2>
        <p style={{ fontFamily: 'Caveat', fontSize: '1.1rem', color: 'rgba(253,250,242,0.4)' }}>
          hover over each one
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: 'relative',
          maxWidth: 900,
          margin: '3rem auto 0',
        }}
      >
        {/* Centre spine */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(245,197,24,0.3) 8%, rgba(245,197,24,0.3) 92%, transparent)',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        />

        {MEMORIES.map((mem, i) => (
          <TimelineCard key={mem.id} mem={mem} index={i} />
        ))}
      </div>

      {/* Continue button */}
      <div style={{ textAlign: 'center', marginTop: '4rem', animation: 'fadeUp 0.7s ease both' }}>
        <button
          onClick={handleNext}
          style={{
            padding: '15px 44px',
            borderRadius: 99,
            background: '#F5C518',
            color: '#1A1209',
            border: 'none',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: '1.05rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.06)'
            e.currentTarget.style.boxShadow = '0 0 32px rgba(245,197,24,0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Keep going ✦
        </button>
      </div>
    </div>
  )
}

function TimelineCard({ mem, index }) {
  const isLeft = mem.side === 'left'
  const delay  = `${index * 0.08}s`

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 1,
        animation: `${isLeft ? 'slideInLeft' : 'slideInRight'} 0.6s ${delay} ease both`,
      }}
    >
      {/* Card takes up ~45% width on its side */}
      <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-end' : 'flex-start' }}>

        {/* Date label */}
        <p
          style={{
            fontFamily: 'Caveat',
            fontSize: '0.9rem',
            color: mem.accent,
            marginBottom: '0.5rem',
            opacity: 0.7,
            paddingRight: isLeft ? 4 : 0,
            paddingLeft: isLeft ? 0 : 4,
          }}
        >
          {mem.date} — {mem.label}
        </p>

        {/* Polaroid flip card */}
        <PolaroidCard mem={mem} isLeft={isLeft} />
      </div>

      {/* Centre dot */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: mem.accent,
          boxShadow: `0 0 12px ${mem.accent}88`,
          border: `2px solid ${mem.color}`,
          zIndex: 2,
          flexShrink: 0,
        }}
      />
    </div>
  )
}

function PolaroidCard({ mem, isLeft }) {
  const rotation = isLeft ? '-1.5deg' : '1.5deg'

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 280,
        aspectRatio: '3/4',
        perspective: 900,
      }}
      className="polaroid-wrap"
    >
      <style>{`
        .polaroid-wrap:hover .polaroid-inner {
          transform: rotateY(180deg);
        }
        .polaroid-inner {
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotate(${rotation});
        }
        .polaroid-front, .polaroid-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 4px;
        }
        .polaroid-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="polaroid-inner">

        {/* FRONT — photo/video placeholder */}
        <div
          className="polaroid-front"
          style={{
            background: '#fff',
            padding: '10px 10px 36px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 3px 3px 0 rgba(0,0,0,0.15)',
          }}
        >
          {/* Media area */}
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              background: mem.color,
              border: `1px solid ${mem.accent}22`,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {mem.media ? (
              mem.mediaType === 'video' ? (
                <video
                  src={mem.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={mem.media}
                  alt={mem.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )
            ) : (
              <>
                <span style={{ fontSize: '2.4rem' }}>{mem.emoji}</span>
                <span
                  style={{
                    fontFamily: 'Caveat',
                    fontSize: '0.8rem',
                    color: `${mem.accent}88`,
                    textAlign: 'center',
                    padding: '0 8px',
                  }}
                >
                  add photo / video here
                </span>
              </>
            )}
          </div>

          {/* Polaroid label strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 26,
              marginTop: 4,
            }}
          >
            <span
              style={{
                fontFamily: 'Caveat',
                fontSize: '0.85rem',
                color: '#555',
                letterSpacing: '0.04em',
              }}
            >
              {mem.label}
            </span>
          </div>
        </div>

        {/* BACK — date + caption */}
        <div
          className="polaroid-back"
          style={{
            background: '#fffef8',
            padding: '18px 16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            overflowY: 'auto',
          }}
        >
          {/* Date */}
          <p
            style={{
              fontFamily: 'Caveat',
              fontSize: '0.85rem',
              color: mem.accent === '#F5C518' ? '#A07800' : mem.accent,
              fontWeight: 600,
              borderBottom: `1.5px solid ${mem.accent}44`,
              paddingBottom: 6,
            }}
          >
            {mem.date}
          </p>

          {/* Caption */}
          <p
            style={{
              fontFamily: 'Caveat',
              fontSize: '0.95rem',
              color: '#2C1D0A',
              lineHeight: 1.55,
              flex: 1,
            }}
          >
            {mem.caption}
          </p>

          {/* Heart */}
          <p style={{ textAlign: 'right', fontSize: '1rem', color: '#E8527A' }}>♡</p>
        </div>

      </div>
    </div>
  )
}

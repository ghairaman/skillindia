import React, { useEffect, useState } from 'react'
import './SpeakersGrid.css'

/**
 * SpeakersGrid
 * Props:
 *  - jsonUrl: URL to fetch JSON from (default uses the same URL in your script)
 *  - imgBase: base path to prepend to speaker image filename if the JSON contains only filename
 */
export default function SpeakersGrid({
  jsonUrl = 'https://observenowevents.in/skill-india/higherspeaker.json',
  imgBase = '/higherspeaker/', // change to '/speakers/' if images are hosted in public/speakers/

  hrjsonurl = 'https://observenowevents.in/skill-india/hrspeaker.json',
  hrimgBase = 'https://observenowevents.in/skill-india/hrspeakers/',
}) {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const HR_SPEAKERS = [
  {
    "speakerimage": "tanya-tikko.png",
    "name": "Taniya Tikoo",
    "designation": "Co-founder & Editor in Chief<br>ObserveNow Media"
  },
  {
    "speakerimage": "praveen-purohit.png",
    "name": "Praveen Purohit",
    "designation": "CHRO<br>Vedanta Resources Limited"
  },
  {
    "speakerimage": "nishant-kalra.png",
    "name": "Nishant_Kalra",
    "designation": "Group CHRO<br>JTEKT INDIA LTD."
  },
  {
    "speakerimage": "abhay-kapoor.png",
    "name": "Abhay Kapoor",
    "designation": "Group CHRO<br>Victura Technologies Private Ltd."
  },
  {
    "speakerimage": "kaushik-chakraborty.png",
    "name": "Kaushik Chakraborty",
    "designation": "CPO<br>Savills Property services"
  },
  {
    "speakerimage": "shikha-rastogi.png",
    "name": "Shikha Rastogi",
    "designation": "Bloom CE Technology<br>CHRO"
  },
  {
    "speakerimage": "gopalji-mehrotra.png",
    "name": "Gopalji_Mehrotra",
    "designation": "Chief Human Resources Officer<br>ACME Group"
  },
  {
    "speakerimage": "viekas-khokha.png",
    "name": "Viekas Khokha",
    "designation": "CHRO<br>Sharda Motor Industries Ltd"
  },
  {
    "speakerimage": "pallavi-poddar.png",
    "name": "Pallavi Poddar",
    "designation": "Chief Human Resources Officer<br>Fenesta Windows"
  },
  {
    "speakerimage": "dev-jha.png",
    "name": "Dev Jha",
    "designation": "CHRO<br>India Glycols Limited"
  },
  {
    "speakerimage": "arvind-srivastava.png",
    "name": "Arvind Srivastava",
    "designation": "Akums Drugs & Pharmaceuticals Ltd<br>President-HR"
  },
  {
    "speakerimage": "gaurav-uppal.png",
    "name": "Gaurav Uppal",
    "designation": "Corporate Vice President & Head HR Corporate Functions<br>Axis Max Life Insurance Company Limited"
  },
  {
    "speakerimage": "abhishek-mishra.png",
    "name": "Abhishek Mishra",
    "designation": "DIRETOR HR SERVICES<br>Protiviti India"
  },
  {
    "speakerimage": "jayeeta-m-sarkar.png",
    "name": "Jayeeta M Sarkar",
    "designation": "Director - L&D<br>HCL Healthcare"
  },
  {
    "speakerimage": "akshay-bahl.png",
    "name": "Akshay Bahl",
    "designation": "Head_of_Global HR<br>Shared Services Center Ericsson"
  }
  
];

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const resp = await fetch(jsonUrl)
        if (!resp.ok) throw new Error(`Network response not ok: ${resp.status}`)
        const data = await resp.json()
        if (!cancelled) {
          setSpeakers(Array.isArray(data) ? data : [])
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [jsonUrl])

  function formatDesignation(text = '') {
    // Replace newline characters with <br/> for HTML rendering
    return (text || '').replace(/\n/g, '<br/>')
  }

  return (
    <section id="speakers" className="bg-light section-light text-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Our Speakers</h2>
          </div>
        </div>

        <div className="spacer-single" />
        <div class="row g-4">
            <div class="col-lg-6 offset-lg-3 text-center">
                <h3 class="wow fadeInUp" data-wow-delay=".2s">Guest of Honor</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-6 text-center mb-5">
              <div class="mainhigher">
                <img src="https://observenowevents.in/skill-india/higherspeaker/chandrashekhar-26-12.png" class="imgspeaker" />
                <h3 class="speakerh3">Dr Chandrasekhar Buddha</h3>
                <p class="speakerp">CEO, Anuvadini AI<br />Chief Coordinating Officer<br />AICTE, Ministry of Education<br />Government of India</p>
              </div>
            </div>

            <div class="col-lg-4 col-6 text-center mb-5">
              <div class="mainhigher">
                <img src="https://observenowevents.in/skill-india/hrspeakers/Rishikesh_Patankar-removebg-preview.png" class="imgspeaker" />
                <h3 class="speakerh3">Rishikesh Patankar</h3>
                <p class="speakerp">Vice President,<br />Government Programs,<br />Industry &amp; Academia Collaboration<br />NSDC</p>
              </div>
            </div>
        </div>
        <div className="spacer-single" />
        <div class="row g-4">
            <div class="col-lg-6 offset-lg-3 text-center">
                <h3 class="wow fadeInUp" data-wow-delay=".2s">Higher Education Speakers</h3>
            </div>
        </div>
        {loading && (
          <div className="text-center my-4">Loading speakers…</div>
        )}

        {error && (
          <div className="text-center my-4 text-danger">Failed to load speakers: {error}</div>
        )}

        {!loading && !error && (
          <div id="speakerslist1" className="row clearfix justify-content-center">
            {speakers.map((val, idx) => {
              // image path: if speakerimage is a full URL use it, otherwise join with imgBase
              const filename = val.speakerimage || ''
              const isAbsolute = /^https?:\/\//i.test(filename)
              const imgSrc = isAbsolute ? filename : `${imgBase}${encodeURIComponent(filename)}`
              return (
                <div key={idx} className="col-lg-3 col-6 text-center mb-5">
                  <div
                    className="speaker-card"
                    style={{
                      width: '100%',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 20%, rgba(41,137,216,1) 50%, rgba(255,255,255,1) 79%, rgba(255,255,255,1) 81%, rgba(255,255,255,0.4) 100%)',
                      borderRadius: 15,
                      padding: '12px',
                    }}
                  >
                    <img
                      src={imgSrc}
                      className="imgspeaker"
                      alt={val.name || 'speaker'}
                      onError={(e) => {
                        // fallback if image not found - optional
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/images/placeholder-speaker.png'
                      }}
                    />

                    <h3 className="speakerh3">{val.name}</h3>

                    <p
                      className="speakerp"
                      // designation may contain newline characters
                      dangerouslySetInnerHTML={{ __html: formatDesignation(val.designation) }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <div className="spacer-single" />
        <div class="row g-4">
            <div class="col-lg-6 offset-lg-3 text-center">
                <h3 class="wow fadeInUp" data-wow-delay=".2s">HR Speakers</h3>
            </div>
        </div>
        <div className="row clearfix justify-content-center">
  {HR_SPEAKERS.map((val, idx) => {
    const imgSrc = `${hrimgBase}${val.speakerimage}`;

    return (
      <div key={idx} className="col-lg-3 col-6 text-center mb-5">
        <div
          className="speaker-card"
          style={{
            width: "100%",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 20%, rgba(41,137,216,1) 50%, rgba(255,255,255,1) 79%, rgba(255,255,255,1) 81%, rgba(255,255,255,0.4) 100%)",
            borderRadius: 15,
            padding: "12px",
          }}
        >
          <img
            src={imgSrc}
            className="imgspeaker"
            alt={val.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/placeholder-speaker.png";
            }}
          />

          <h3 className="speakerh3">{val.name}</h3>

          <p
            className="speakerp"
            dangerouslySetInnerHTML={{ __html: val.designation }}
          />
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  )
}

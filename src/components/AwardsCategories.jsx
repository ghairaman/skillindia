import React from 'react'

export default function AwardsCategories() {
  return (
    <section id="section-faq" className="bg-dark section-dark text-light">
      <div className="container">
        <div className="row g-4">

          {/* LEFT CONTENT */}
          <div className="col-lg-5 text-start">
            <div className="subtitle wow fadeInUp p-0" data-wow-delay=".0s">
              Award Categories
            </div>

            <h2
              className="wow fadeInUp text-uppercase text-light nogradient"
              data-wow-delay=".4s"
            >
              Welcome to the<br />
              <span className="aboutspan">Skill India Leadership Awards</span>
            </h2>

            <p
              className="wow fadeInUp"
              data-wow-delay=".6s"
              style={{ textShadow: 'rgb(0 49 235) 0px 0px 0.7px' }}
            >
              The Skill India Leadership Summit 2026 will be held on 13th Feb 2026
              in New Delhi, bringing together leaders, policymakers, HR
              professionals, educators, and industry pioneers to drive the
              future of India’s workforce. Focused on the theme "From Learning To
              Leadership: Education, Skills & HR For India's Future," the summit
              will highlight the critical role of skilling, upskilling, and
              reskilling in shaping a competitive workforce.
            </p>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="col-lg-7">
            <div className="accordion s2 wow fadeInUp">
              <div className="accordion-section pt-3">

                {/* Higher Education Awards */}
                <div className="accordion-section-title" data-tab="#accordion-a1">
                  Higher Education Awards
                </div>
                <div className="accordion-section-content" id="accordion-a1">
                  <ul className="award-list">
                    {[
                      'Excellence in Student Outreach, Engagement and Digital Innovation 2026',
                      'Excellence in Digital Education and Innovation 2026',
                      'Most Promising University/ Institute in R&D (Research & Development) 2026',
                      'Remarkable Contribution in Online Learning and Digital Practices 2026',
                      'Innovation in Higher Education and Skills Enhancement 2026',
                      'Outstanding University/ Institute in Learning Initiative and Skill Development 2026',
                      'Outstanding University/ Institute in Innovative Teaching and Learning Practices 2026',
                      'Most Impactful University/ Institute in Digital Infrastructure 2026',
                      'Most Emerging University/ Engineering Institute 2026',
                      'Outstanding University/ Institute with excellent infrastructure and Green Campus Initiative 2026',
                      'Outstanding University/ Institute in Digital Innovation, Technology and Best Practices 2026',
                      'CSR Excellence in Higher Education 2026',
                      'Most Impactful Contribution for Global Outreach and Exchange Program 2026',
                      'Most Innovative University/ Institute in Global Collaboration through Digital Learning 2026',
                      'Most Emerging Start-up University 2026',
                      'Remarkable Contribution in Curriculum Development and Online Teaching 2026',
                      'Most Promising University/ Institute in Digital Transformation 2026',
                      'Most Promising B-School of the Year 2026',
                      'Most Promising Corporate-Governed University 2026',
                      'Innovative Practices for Academic Excellence in Higher Education 2026',
                      'Outstanding Institute / University in Smart Class Initiative 2026',
                      'Outstanding University in Training & Placements 2026',
                      'Most Emerging University/ Institute in India 2026',
                      'Most Promising University in Curriculum Design and Development 2026',
                      'E Campus Award for the year 2026',
                    ].map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-check"></i>&nbsp;&nbsp;{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* EdTech Awards */}
                <div className="accordion-section-title" data-tab="#accordion-a2">
                  EdTech Leadership Awards
                </div>
                <div className="accordion-section-content" id="accordion-a2">
                  <ul className="award-list">
                    {[
                      'Leading E-learning Platform 2026',
                      'Outstanding Tech Solution Provider for Higher Education 2026',
                      'Outstanding Tech Solution Provider for Schools 2026',
                      'Most Promising Assessment Solution Provider of the Year 2026',
                      'Outstanding Smart Class Solution Provider of the Year 2026',
                      'Leading ERP Solution Provider of the Year 2026',
                      'Outstanding Digital Education Platform Provider of the Year 2026',
                      'Leading School Security Solution Provider of the Year 2026',
                      'Most Promising Video Conferencing Solution Provider of the Year 2026',
                      'Excellence in Multi-Language Content Provider of the Year 2026',
                    ].map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-check"></i>&nbsp;&nbsp;{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HR Leadership Awards */}
                <div className="accordion-section-title" data-tab="#accordion-a3">
                  HR Leadership Awards
                </div>
                <div className="accordion-section-content" id="accordion-a3">
                  <ul className="award-list">
                    {[
                      'Leadership Excellence Icon of the Year',
                      'HR Leadership Trailblazer Award',
                      'People & Culture Visionary of the Year',
                      'Excellence in Strategic Leadership Award',
                      'Transformational Leader of the Year',
                      'Emerging Leader (Under 40) – Rising Excellence Award',
                      'Women Leadership Impact Award',
                      'People Strategy & Innovation Leader Award',
                      'Future of Work Leadership Champion',
                      'Champion of Talent & Capability Building',
                      'Organisational Culture Leadership Award',
                      'Excellence in Employee Experience Leadership',
                      'Leader in Workforce Development & Upskilling',
                      'Leadership Excellence in Diversity & Inclusion',
                    ].map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-check"></i>&nbsp;&nbsp;{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Individual Awards */}
                <div className="accordion-section-title" data-tab="#accordion-a4">
                  Individual Leadership Awards
                </div>
                <div className="accordion-section-content" id="accordion-a4">
                  <ul className="award-list">
                    {[
                      'Iconic Leadership in Higher Education 2026',
                      'Outstanding Leadership in Higher Education 2026',
                      'Outstanding Contribution in Online Education and Pedagogy 2026',
                      'Outstanding Teaching Excellence Award 2026',
                      'Excellent Digital Educator Award of the year 2026',
                      'Excellence in Innovative Teaching & Learning Practices 2026',
                      'Outstanding Research Scholar of the year 2026',
                      'Emerging Leader in Higher Education 2026',
                      'Entrepreneurship Award in Higher Education 2026',
                      'Women Entrepreneurship Award in Higher Education 2026',
                      'Outstanding Vice Chancellor of the year 2026',
                    ].map((item, i) => (
                      <li key={i}>
                        <i className="fa fa-check"></i>&nbsp;&nbsp;{item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

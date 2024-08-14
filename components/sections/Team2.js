
import Link from "next/link"
import teamData from '@/app/teamData';


export default function Team2() {
    return (
        <>

<section className="tf-section tf_team mt56">
      <div className="overlay">
        <img src="/assets/images/backgroup/bg_team_section.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title mb40">
              <h2 className="title"> <br />
                Meet the team
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="team-box-wrapper">
              {teamData.map((member) => (
                <div className="team-box" key={member.id}>
                  <img className="shape" src="/assets/images/common/shape_3.png" alt="" />
                  <img className="shape_ecfect" src="/assets/images/common/shape_4.svg" alt="" />
                  <div className="image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="content">
                    <h5 className="name">
                      <Link href={`/team-details/${member.id}`}>
                        {member.name}
                      </Link>
                    </h5>
                    <p className="position">{member.position}</p>
                    <ul className="social">
                      <li>
                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          {/* LinkedIn SVG Icon */}
                          <svg width={19} height={18} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3003 17.8V11.354C18.3003 8.18599 17.6183 5.76599 13.9223 5.76599C12.1403 5.76599 10.9523 6.73399 10.4683 7.65799H10.4243V6.05199H6.92627V17.8H10.5783V11.97C10.5783 10.43 10.8643 8.95599 12.7563 8.95599C14.6263 8.95599 14.6483 10.694 14.6483 12.058V17.778H18.3003V17.8Z" fill="#798DA3" />
                            <path d="M0.986328 6.052H4.63833V17.8H0.986328V6.052Z" fill="#798DA3" />
                            <path d="M2.8122 0.200012C1.6462 0.200012 0.700195 1.14601 0.700195 2.31201C0.700195 3.47801 1.6462 4.44601 2.8122 4.44601C3.9782 4.44601 4.9242 3.47801 4.9242 2.31201C4.9242 1.14601 3.9782 0.200012 2.8122 0.200012Z" fill="#798DA3" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

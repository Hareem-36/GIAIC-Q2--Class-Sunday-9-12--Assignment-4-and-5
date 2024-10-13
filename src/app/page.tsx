import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import profile from '../app/images/hh.jpg';
import profile1 from '../app/images/bb1.jpg';
import profile2 from '../app/images/Minar_e_Pakistan_2021.jpg';
import profile3 from '../app/images/Kabuli_Gate_-_Rohtas_Fort_by_Usman_Ghani.jpg';
import profile4 from '../app/images/Quaid_e_Azam_Residency_Ziarat.jpg';
import profile5 from '../app/images/the-mausoleum.jpg';
import profile6 from '../app/images/1280px-Tomb_of_Emperor_Jahangir.jpg';

        export default function Home() {
            return (
                <div className="home-container">
                    <div className="content">
                        <h3 style={{ color: '#229799', fontSize:'40px',textAlign: 'center'  }}>
                            Hareem's Blog Website<br />
                            <span style={{ color: '#0B2F9F', textDecoration: 'underline' ,fontSize:'50px'}}>
                                Historical Places of Pakistan
                            </span>
                        </h3>
                        <p className="bg-gray-200 border border-blue-800 rounded-lg p-5 mx-auto max-w-2xl text-green-800 text-lg leading-relaxed text-justify">
                            Pakistan has a rich history and great cultural diversity. The historical places of Pakistan are some of the most popular tourist destinations in the country. In fact, both locals and tourists enjoy these historical places. They radiate the pride of the Pakistani people and represent culture. When you’re exhausted after the stressful weeks of exam preparation and exams, a nice vacation is exactly what you need. The beautiful and fascinating historical places in Pakistan are bound to make your break perfect.
                        </p>
            </div>

            <div className="my-8 flex justify-center">
                <div className="w-[500px] h-[500px] relative">
                    <Image
                        src={profile}
                        alt="Profile pic"
                        fill
                        className="rounded-lg shadow-lg"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Blog posts section */}
            <div className="parentContainer">
                {/* Blog Post 1 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer">
                        <Image
                            src={profile1}
                            alt="Lahore Fort"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Lahore Fort</h1>
                   <b> <p className="description">
                        Lahore fort is the only place in Pakistan which represents the different phases in the development of Mughal architecture.
                    </p></b>
                    <Link href="/read-more-lahore-fort">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>

                {/* Blog Post 2 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer">
                        <Image
                            src={profile2}
                            alt="Minar-e-Pakistan"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Minar-e-Pakistan</h1>
                    <b> <p className="description">
                        It was built to honor the Lahore Resolution, which was held on 23rd March 1940 to demand a separate homeland for Muslims.
                    </p></b>
                    <Link href="/read-more-minar-e-pakistan">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>

                {/* Blog Post 3 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer">
                        <Image
                            src={profile3}
                            alt="Rohtas Fort"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Rohtas Fort</h1>
                    <b> <p className="description">
                        Built by the Afghan king Sher Shah Suri, Rohtas Fort is an architectural masterpiece. It represents the culture and heritage of the Afghan-Persian people.
                    </p></b>
                    <Link href="/read-more-rohtas-fort">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>

            <div className="parentContainer">
                {/* Blog Post 1 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer">
                        <Image
                            src={profile4}
                            alt="Lahore Fort"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Ziarat Residency</h1>
                    <b><p className="description">
                    Constructed in 1892, the Ziarat Residence is an attraction for history lovers, being the residence of Quaid e Azam. It is located in Ziarat, Balochistan. 
                    </p></b>
                    <Link href="/read-more-lahore-fort">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>

                {/* Blog Post 2 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer ">
                        <Image
                            src={profile5}
                            alt="Minar-e-Pakistan"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Mazar e Quaid</h1>
                    <b><p className="description">
                    Pakistan’s founder, Muhammad Ali Jinnah, rests in a pristine, white marble structure. The mausoleum attracts both locals and tourists alike at all times of the day with its regal presence and historical strength. 
                    </p></b>
                    <Link href="/read-more-minar-e-pakistan">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>

                {/* Blog Post 3 */}
                <div className="childContainer bounce-in-left">
                    <div className="imageContainer">
                        <Image
                            src={profile6}
                            alt="Rohtas Fort"
                            fill
                            className="rounded-lg shadow-lg"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1 className="title">Tomb of Jahangir</h1>
                    <b><p className="description">
                    It’s located in Lahore in Shahdara, well-known for its cultural significance. It was built by Jahangir’s son, Shah Jahan, and the place was chosen by Jahangir’s wife, Noor Jahan.
                    </p></b>
                    <Link href="/read-more-rohtas-fort">
                        <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>


        </div>
    );
}

/* eslint-disable react/no-unescaped-entities */
import IRO from "../assets/Certificate/IRO.jpg";
import IRO11 from "../assets/Certificate/IRO11.jpg";
import OSTW from "../assets/Certificate/OSTW.jpg";
import progate from "../assets/Certificate/progate.jpg";
import network_security from "../assets/Certificate/network_security.jpg";
import network_essential from "../assets/Certificate/network_essential.jpg";

export default function Awards() {
  return (
    <>
      <div className="container mx-auto my-10 p-8">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold my-6">
            ACHIEVEMENTS & CERTIFICATIONS
          </h1>
          <h1 className="text-3xl font-serif italic">
            <span className="text-amber-500"> Certified  </span> and
            <span className="text-amber-500"> Accomplished  </span>
          </h1>
          <hr className="mt-4 mx-auto border-b-4 rounded-xl w-24 border-amber-700" />
        </div>

        <div className="flex-row md:flex gap-4 md:p-0 p-6 my-10 shadow-xl">
          <div className="grid grid-cols-3 gap-2 p-4">
            <img src={IRO} alt="indonesia robotic olympiad" className="w-52 md:w-80 h-52" />
            <img src={IRO11} alt="international robotic olympiad" className="w-52 md:w-80 h-52" />
            <img src={OSTW} alt="outstanding student for th world" className="w-52 md:w-80 h-52" />
            <img src={progate} alt="progate" className="w-40 md:w-w-80 h-28" />
            <img src={network_security} alt="cisco network security" className="w-40 md:w-w-80 h-28" />
            <img src={network_essential} alt="cisco network essential" className="w-40 md:w-w-80 h-28" />
          </div>
          
          <div className="justify-center items-center w-full">
            <div className="justify-end p-6">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Tittle Certificate</th>
                      <th>From</th>
                      <th>Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className="text-xs">
                      <th>1</th>
                      <td>Indonesia Robotic Olympiad</td>
                      <td>ROCI</td>
                      <td>2011</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="text-xs">
                      <th>2</th>
                      <td>International Robotic Olympiad</td>
                      <td>IROC</td>
                      <td>2011</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="text-xs">
                      <th>3</th>
                      <td>Outstanding Student for the World</td>
                      <td>Kementerian Luar Negeri </td>
                      <td>2011</td>
                    </tr>
                    <tr className="text-xs">
                      <th>4</th>
                      <td>web development</td>
                      <td>progate</td>
                      <td>2021</td>
                    </tr>
                    <tr className="text-xs">
                      <th>5</th>
                      <td>network security</td>
                      <td>cisco</td>
                      <td>2022</td>
                    </tr>
                    <tr className="text-xs">
                      <th>6</th>
                      <td>network essential"</td>
                      <td>cisco</td>
                      <td>2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
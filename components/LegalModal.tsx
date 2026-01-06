import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LegalPage } from '../types';

interface LegalModalProps {
  type: LegalPage;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type !== LegalPage.NONE) {
      // Prevent scrolling ONLY when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [type]);

  if (type === LegalPage.NONE) return null;

  const getContent = () => {
    switch (type) {
      case LegalPage.PRIVACY:
        return {
          title: "Politika zasebnosti",
          content: (
            <div className="space-y-4 text-slate-600">
              <p>Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI')}</p>
              <h3 className="font-bold text-slate-800">1. Uvod</h3>
              <p>Spoštujemo vašo zasebnost in se zavezujemo k varovanju vaših osebnih podatkov. Ta politika zasebnosti pojasnjuje, kako zbiramo, uporabljamo in varujemo vaše podatke, ko obiščete našo spletno stran.</p>
              <h3 className="font-bold text-slate-800">2. Zbiranje podatkov</h3>
              <p>Pri uporabi kontaktnega obrazca ali pošiljanju e-pošte lahko zbiramo naslednje podatke: Ime in priimek, E-poštni naslov, Telefonska številka. Te podatke potrebujemo izključno za odgovor na vaše povpraševanje.</p>
              <h3 className="font-bold text-slate-800">3. Varstvo podatkov</h3>
              <p>Vaših osebnih podatkov ne bomo posredovali tretjim osebam brez vaše izrecne privolitve, razen če to zahteva zakon.</p>
              <h3 className="font-bold text-slate-800">4. Vaše pravice</h3>
              <p>Imate pravico do vpogleda, popravka ali izbrisa vaših osebnih podatkov. Za uveljavljanje teh pravic nas kontaktirajte na info@kerase.si.</p>
            </div>
          )
        };
      case LegalPage.TERMS:
        return {
          title: "Splošni pogoji poslovanja",
          content: (
            <div className="space-y-4 text-slate-600">
              <p>Splošni pogoji določajo pravice in obveznosti med podjetjem Simo Evdjić s.p. (izvajalec) in naročnikom storitev.</p>
              <h3 className="font-bold text-slate-800">1. Storitve</h3>
              <p>Izvajalec se zavezuje, da bo naročena dela (polaganje keramike, talnih oblog) opravil strokovno, kvalitetno in v dogovorjenem roku.</p>
              <h3 className="font-bold text-slate-800">2. Cene in plačilo</h3>
              <p>Cene storitev so določene v ponudbi, ki jo stranka prejme po ogledu objekta ali na podlagi povpraševanja. Plačilo se izvede po opravljeni storitvi ali po dogovoru (avans).</p>
              <h3 className="font-bold text-slate-800">3. Reklamacije</h3>
              <p>Naročnik mora morebitne vidne napake grajati takoj po zaključku del. Skrite napake se uveljavljajo v skladu z zakonodajo.</p>
            </div>
          )
        };
      case LegalPage.COOKIES:
        return {
          title: "Politika piškotkov",
          content: (
            <div className="space-y-4 text-slate-600">
              <p>Ta spletna stran uporablja piškotke za zagotavljanje boljše uporabniške izkušnje.</p>
              <h3 className="font-bold text-slate-800">Kaj so piškotki?</h3>
              <p>Piškotki so majhne besedilne datoteke, ki se shranijo na vašo napravo, ko obiščete spletno stran.</p>
              <h3 className="font-bold text-slate-800">Upravljanje piškotkov</h3>
              <p>Z uporabo te strani se strinjate z uporabo piškotkov. Večina brskalnikov samodejno sprejme piškotke, vendar lahko to nastavitev spremenite v nastavitvah brskalnika.</p>
            </div>
          )
        };
      case LegalPage.COMPANY_INFO:
        return {
          title: "Podatki o podjetju",
          content: (
            <div className="space-y-4 text-slate-600">
              <p>Podatki o upravitelju spletne strani in izvajalcu storitev.</p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p><strong>Naziv podjetja:</strong> Simo Evdjić s.p., Zaključna gradbena dela</p>
                <p><strong>Naslov:</strong> Avče 106, 5213 Kanal</p>
                <p><strong>E-pošta:</strong> info@kerase.si</p>
                <p><strong>Telefon:</strong> +386 40 992 974</p>
              </div>
            </div>
          )
        };
      default:
        return {
          title: "",
          content: null
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900/75 transition-opacity" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
              <h3 className="text-xl leading-6 font-bold text-slate-900" id="modal-title">
                {title}
              </h3>
              <button
                type="button"
                className="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-2">
              {content}
            </div>
          </div>
          <div className="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Zapri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
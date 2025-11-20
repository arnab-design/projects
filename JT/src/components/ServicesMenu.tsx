import { ImageWithFallback } from './shared/ImageWithFallback';

interface ServicesMenuProps {
  currentPage: number;
}

export function ServicesMenu({ currentPage }: ServicesMenuProps) {
  return (
    <>
      {/* PAGE 1 */}
      {currentPage === 1 && (
        <div 
          className="w-[816px] h-[1056px] mx-auto bg-[#E8E8E8] p-8 print:shadow-none shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-6xl mb-2 text-black leading-[0.9]" style={{ fontFamily: 'Georgia, serif' }}>
              James Food<br />Photography
            </h1>
            <p className="text-lg text-black mb-0.5">Toronto Food Photography & Videography</p>
            <p className="text-black text-sm">Worked with 75+ restaurants, chefs, and hospitality brands</p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            {/* Photo 1 */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635432877848-9c86755eb2f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NjM1Nzk5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 2 */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679279726940-be5ce80c632c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZSUyMGJvd2wlMjBvdmVyaGVhZHxlbnwxfHx8fDE3NjM1Nzk5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Photo 3 */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624286487109-0d42dad998bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwcGxhdGUlMjBmb29kfGVufDF8fHx8MTc2MzU3OTk4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Featured 1-Hour Power Shoot - Large */}
          <div className="rounded-lg bg-gradient-to-br from-[#E67E22] to-[#D35400] text-white p-6 border-4 border-[#F39C12] relative shadow-lg mb-3">
            <div className="absolute -top-1 -right-1 -left-1 bg-[#F39C12] text-center py-1.5 rounded-t text-sm text-black" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
              HOLIDAY SPECIAL
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <div className="text-4xl mb-2 leading-tight">1-Hour<br />Power Shoot</div>
                <div className="flex items-baseline gap-3 mb-2">
                  <div className="text-6xl">$500</div>
                  <div className="text-xl line-through opacity-75">$750</div>
                </div>
                <p className="text-sm">Limited time offer • Book before Dec 31</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>1-hour on-site photoshoot</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Unlimited edited photos delivered within 48 hours</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Menu items, hero shots, cocktails, desserts</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Platform-ready for delivery apps and social media</span>
                </p>
              </div>
            </div>
          </div>

          {/* What You Get & Add-Ons */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {/* What You Get */}
            <div className="rounded-lg bg-white p-5 shadow-md">
              <h3 className="text-lg mb-3 text-black">What You Get</h3>
              <ul className="space-y-1.5 text-xs text-black">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Professional food photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Chef features and behind-the-scenes content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Lifestyle and interior shots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Platform-ready for UberEats, SkipTheDishes, DoorDash</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>High-resolution files with full commercial usage rights</span>
                </li>
              </ul>
            </div>

            {/* Add-Ons */}
            <div className="rounded-lg bg-white p-5 shadow-md">
              <h3 className="text-lg mb-3 text-black">Add-Ons</h3>
              <div className="space-y-2.5 text-xs text-black">
                <div>
                  <p className="mb-0.5">Videography</p>
                  <p className="text-[10px] text-neutral-600 mb-0.5">3-5 short-form videos (15-30 sec each)</p>
                  <p className="text-[#E67E22]">+$300</p>
                </div>
                <div>
                  <p className="mb-0.5">Rush Delivery</p>
                  <p className="text-[10px] text-neutral-600 mb-0.5">24-hour turnaround</p>
                  <p className="text-[#E67E22]">+$150</p>
                </div>
                <div>
                  <p className="mb-0.5">Additional Shoot Hour</p>
                  <p className="text-[10px] text-neutral-600 mb-0.5">Extended shoot time</p>
                  <p className="text-[#E67E22]">+$400</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-black text-white rounded-lg p-5 text-center">
            <p className="text-lg mb-3">Ready to elevate your restaurant's visual presence?</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs max-w-md mx-auto">
              <div className="text-left">
                <span className="text-neutral-400">Email:</span> james@foodphoto.ca
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Phone:</span> (416) 555-1234
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Instagram:</span> @jamesfoodphoto
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Web:</span> jamesfoodphoto.ca
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 2 */}
      {currentPage === 2 && (
        <div 
          className="w-[816px] h-[1056px] mx-auto bg-[#E8E8E8] p-8 print:shadow-none shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl mb-1.5 text-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Additional Packages
            </h1>
            <p className="text-base text-black">Ongoing partnerships and comprehensive brand shoots</p>
          </div>

          {/* Monthly Retainer - Full Width */}
          <div className="rounded-lg bg-[#7D4B5E] text-white p-7 shadow-lg mb-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-3 leading-tight" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.5px', textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
                  MONTHLY<br />CONTENT<br />RETAINER
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-6xl">$1,200</div>
                  <div className="text-xl">/month</div>
                </div>
                <p className="text-sm opacity-90">Ongoing partnership for consistent content</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>2 shoots per month (1 hour each)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Unlimited edited photos per shoot</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Priority scheduling</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Content calendar planning support</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>All deliverables from Package 1</span>
                </p>
              </div>
            </div>
          </div>

          {/* Complete Brand Shoot - Full Width */}
          <div className="rounded-lg bg-[#5B4B6D] text-white p-7 shadow-lg mb-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-3 leading-tight" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.5px', textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
                  COMPLETE<br />BRAND<br />SHOOT
                </div>
                <div className="text-6xl mb-2">$2,000</div>
                <p className="text-sm opacity-90">Full-day intensive photography & videography</p>
              </div>
              
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Full-day shoot (6-8 hours)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Unlimited edited photos + 2-3 short-form videos (15-30 sec each)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Menu, chef portraits, behind-the-scenes, interior/lifestyle shots</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Delivery app optimization + social media kit</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Delivered within 5 business days</span>
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757358957218-67e771ec07bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzUzNjg3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513772457252-c0417654a2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGlzaCUyMGVsZWdhbnR8ZW58MXx8fHwxNzYzNTc3MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693409166438-fc92119a0060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBob3RvZ3JhcGh5JTIwZGFya3xlbnwxfHx8fDE3NjM1NzcyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Food photography sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-black text-white rounded-lg p-6 text-center">
            <p className="text-lg mb-4">Let's create stunning imagery that makes your dishes irresistible</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm max-w-lg mx-auto">
              <div className="text-left">
                <span className="text-neutral-400">Email:</span> james@foodphoto.ca
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Phone:</span> (416) 555-1234
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Instagram:</span> @jamesfoodphoto
              </div>
              <div className="text-left">
                <span className="text-neutral-400">Web:</span> jamesfoodphoto.ca
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

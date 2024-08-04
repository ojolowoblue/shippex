import AppLoader from '@/components/ui/AppLoader';

import Invalid from '@/assets/illustrations/invalid.svg?react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useTrackShipment } from '@/hooks';

import ArrowOut from '@/assets/icons/arrow-out.svg?react';
import User from '@/assets/icons/user.svg?react';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import MapPin from '@/assets/icons/map-pin.svg?react';
import Truck from '@/assets/icons/truck.svg?react';
import Receipt from '@/assets/icons/receipt.svg?react';

export default function Shipments() {
  const { isLoading, error, refetch } = useTrackShipment({
    doctype: 'AWB',
    filters: {
      name: ['like', '%210173066689%'],
    },
  });

  return (
    <div>
      <header className="bg-[#F8FAFC] h-[110px] rounded-lg flex items-center justify-center">
        <form action="/tracker" className="flex items-center gap-4">
          <Input className="bg-white min-w-[500px]" />
          <Button className="w-[120px]">Track</Button>
        </form>
      </header>

      <AppLoader errorMessage={error} loading={isLoading} onRetry={refetch} illustration={<Invalid />}>
        <div className="flex flex-wrap gap-20 mt-5">
          <div className="pt-5 border rounded-xl w-[500px]">
            <div className="mb-4 px-5">
              <h3 className="text-[18px] text-foreground font-bold mb-1">4515645646466</h3>
              <p className="text-sm text-muted">
                Last updated 16/12/2023 <span>11:33 AM</span>
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <ArrowOut width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Sender</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">Mohamamd Manaa</p>
                </div>
              </div>

              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <User width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Consignee</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">Beshouy Ezzat</p>
                </div>
              </div>

              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <ArrowDown width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Origin Address</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">
                    Ahmed Hassan 25, Nile Street, Zamalek Cairo Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <MapPin width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Destination Address</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">
                    Fatima Ali 10, Corniche Road, Gleem Alexandria Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <Truck width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Shipping Service</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">Express Service</p>
                </div>
              </div>

              <div className="flex items-start py-3.5 px-4">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <Receipt width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Total COD Amount</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">499.55 EGP</p>
                </div>
              </div>

              <div className="flex items-start py-5 px-4 bg-[#f8fafc] mt-5">
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <Receipt width={16} height={16} />
                  <p className="text-muted text-[15px] font-medium">Total COD Amount</p>
                </div>
                <div className="flex-1 px-4 flex gap-2.5 items-center">
                  <p className="text-foreground text-[15px] font-medium">499.55 EGP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="mb-4">
              <h3 className="text-[18px] text-foreground font-bold mb-1">TIMELINE</h3>
            </div>

            <ol className="flex flex-col">
              <li className="flex gap-6 min-h-max">
                <div className="-mt-1.5">
                  <p className="text-sm font-medium text-muted">12:05PM</p>
                  <p className="text-sm font-medium text-muted">Dec 16, 2023</p>
                </div>

                <div className="relative border-s border-gray-200 pl-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="-mt-1.5 pb-8">
                    <time className="font-semibold leading-none text-foreground">Shipment created</time>
                    <p className="mt-1 text-base font-medium text-muted">Shipment Description</p>
                    <div className="flex gap-2 items-center py-3">
                      <img src="/abdo.svg" alt="Abdo" width={18} height={18} />

                      <p className="text-[15px] font-semibold">Abdo Saeed</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex gap-6 min-h-max">
                <div className="-mt-1.5">
                  <p className="text-sm font-medium text-muted">12:05PM</p>
                  <p className="text-sm font-medium text-muted">Dec 16, 2023</p>
                </div>

                <div className="relative border-s border-gray-200 pl-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="-mt-1.5 pb-8">
                    <time className="font-semibold leading-none text-foreground">Shipment picked-up</time>
                    <div className="flex gap-2 items-center py-3">
                      <img src="/ezzat.svg" alt="Abdo" width={18} height={18} />

                      <p className="text-[15px] font-semibold">Beshouy Ezzat</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex gap-6 min-h-max">
                <div className="-mt-1.5">
                  <time className="text-sm block font-medium text-muted">14:08PM</time>
                  <time className="text-sm block font-medium text-muted">Dec 16, 2023</time>
                </div>

                <div className="relative border-s border-gray-200 pl-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="-mt-1.5 pb-8">
                    <time className="font-semibold leading-none text-foreground">Proof of pick-up</time>
                    <p className="mt-1 text-base font-medium text-muted">Proof of pick-up description</p>
                    <div className="flex gap-2 items-center py-3">
                      <img src="/abdo.svg" alt="Abdo" width={18} height={18} />

                      <p className="text-[15px] font-semibold">James Collins</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex gap-6 min-h-max">
                <div className="-mt-1.5">
                  <time className="text-sm block font-medium text-muted">12:05PM</time>
                  <time className="text-sm block font-medium text-muted">Dec 16, 2023</time>
                </div>

                <div className="relative border-s border-gray-200 pl-6">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="-mt-1.5 pb-8">
                    <time className="font-semibold leading-none text-foreground">Shipment on delivery</time>
                    <p className="mt-1 text-base font-medium text-muted">Description goes here</p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </AppLoader>
    </div>
  );
}

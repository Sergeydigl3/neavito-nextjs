"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import React, { SVGProps, useState } from 'react';
import ProductCard, { ProductCardProps } from '@/components/main-page/product-card';
import Image from 'next/image'

export const ProductCardPage: React.FC<{ suggestedProducts: ProductCardProps[], product?: ProductCardProps }> = ({ suggestedProducts, product }) => {
  if (!suggestedProducts) suggestedProducts = [];

  const [question, setQuestion] = useState('');

  const handleQuestionClick = (q: string) => {
    setQuestion(q);
  };

  return (
    <>
      <main>
        <section className="py-12 md:py-10 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  alt="Product Image"
                  className="w-full h-auto rounded-lg"
                  src={product?.imageUrls[0]}
                  width={640}
                  height={400}
                />
                {/* <div className="grid grid-cols-3 gap-4 mt-4">
                  <img alt="Product Thumbnail 1" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                  <img alt="Product Thumbnail 2" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                  <img alt="Product Thumbnail 3" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                </div> */}
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
                {/* <p className="text-gray-500 mb-4">{product?}</p> */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-500 ml-2">(123 reviews)</span>
                </div>
                <p className="text-2xl font-bold mb-4">{product?.price}</p>
                {/* <Button className="w-full mb-2" variant="default">
                  Contact Seller
                </Button> */}
                <p className="text-gray-500 mb-4">You can ask the seller any questions you have.</p>
                <Card className="bg-white rounded-lg shadow mb-4 pt-4">
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage alt="Avatar" src="/avatars/01.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">(123 reviews) - 4.8 avg. rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Address</p>
                  <p className="text-gray-500 dark:text-gray-300">{product?.location}</p>
                  {/* <p className="text-gray-500 dark:text-gray-300">Anytown, USA 12345</p> */}
                </div>

                <Textarea
                  className="w-full mb-4 rounded-lg border border-gray-200 p-2"
                  placeholder="Ask the seller a question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <div className="flex flex-wrap gap-2 mb-4 ">
                  <Button className="sm" size="sm" variant="outline" onClick={() => handleQuestionClick('Почему квадратные колеса не популярны для автомобилей?')}>
                    Почему квадратные колеса не популярны для автомобилей?
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleQuestionClick('Почему круглая пицца режется на треугольные кусочки и кладется в квадратную коробку?')}>
                    Почему круглая пицца режется на треугольные кусочки и кладется в квадратную коробку?
                  </Button>
                  <Button className="py-6" size="sm" variant="outline" onClick={() => handleQuestionClick('Если кошка всегда приземляется на лапы, а бутерброд с маслом падает маслом вниз, что произойдет, если привязать бутерброд к спине кошки?')}>
                    <span className="w-full text-left whitespace-normal">Если кошка всегда приземляется на лапы, а бутерброд с маслом падает маслом вниз, что произойдет, если привязать бутерброд к спине кошки?</span>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleQuestionClick('Question 4')}>
                    Question 4
                  </Button>
                </div>
                <Button className="w-full">
                  Ask Question
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-900 py-6 md:py-16 px-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed
                tincidunt, risus in finibus rutrum, lectus sapien iaculis libero, eu previus neque mauris eget sem.
                Vivamus maximus euismod suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              </p>
              <p>
                Cras commodo cursus magna, vel scelerisque nisl consectetur et. Quisque velit nisi, pretium ut lacinia
                in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Sed posuere consectetur est at
                lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Seller Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Card className="bg-white rounded-lg shadow pt-5">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt="Avatar" src="/avatars/01.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-500 text-sm">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <p className="mt-4">
                      The seller was very responsive and helpful. I had a great experience with this purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow pt-5">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt="Avatar" src="/avatars/02.png" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Anderson</p>
                      <p className="text-gray-500 text-sm">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                    <p className="mt-4">
                      The seller was very professional and the item was exactly as described. Im very satisfied with
                      this purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow pt-5">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt="Avatar" src="/avatars/03.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Michael Johnson</p>
                      <p className="text-gray-500 text-sm">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <XIcon className="h-4 w-4" />
                      <XIcon className="h-4 w-4" />
                    </div>
                    <p className="mt-4">
                      The seller was a bit slow in responding, but the item was as described and arrived on time.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow pt-5">
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt="Avatar" src="/avatars/04.png" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Emily Martinez</p>
                      <p className="text-gray-500 text-sm">Verified Buyer</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <XIcon className="h-4 w-4" />
                    </div>
                    <p className="mt-2">
                      The seller was very helpful and the item was delivered quickly. Im satisfied with the overall
                      experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {suggestedProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}

              {/* <ProductCard /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function LocateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

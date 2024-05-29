/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/HQIKyYp8Xxa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function ProductCardPage() {
  return (
    <>
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img alt="Logo" className="h-8 w-auto" src="/placeholder.svg" />
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <a className="text-gray-500 hover:text-gray-900" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 hover:text-gray-900" href="#">
                    Catalog
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 hover:text-gray-900" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 hover:text-gray-900" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Search products..."
                type="text"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center" variant="outline">
                  <FilterIcon className="mr-2" />
                  Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select className="mt-1" id="category">
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price">Price Range</Label>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input className="mt-1" id="location" placeholder="Enter location" type="text" />
                  </div>
                  <Button className="w-full" variant="primary">
                    Apply Filters
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 ml-4">Sign In</button>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 border border-gray-200 ml-2">
              Sign Up
            </button>
          </div>
        </div>
      </header> */}
      <main>
        <section className="py-12 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img alt="Product Image" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <img alt="Product Thumbnail 1" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                  <img alt="Product Thumbnail 2" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                  <img alt="Product Thumbnail 3" className="w-full h-auto rounded-lg" src="/placeholder.svg" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">Product Name</h1>
                <p className="text-gray-500 mb-4">Product Description</p>
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
                <p className="text-2xl font-bold mb-4">$99.99</p>
                <Button className="w-full mb-2" variant="default">
                  Contact Seller
                </Button>
                <p className="text-gray-500 mb-4">You can ask the seller any questions you have.</p>
                <Card className="bg-white rounded-lg shadow mb-4">
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage alt="Avatar" src="/avatars/01.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">(123 reviews) - 4.8 avg. rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Address</p>
                  <p className="text-gray-500">123 Main St.</p>
                  <p className="text-gray-500">Anytown, USA 12345</p>
                </div>
                
                <Textarea
                  className="w-full mb-4 rounded-lg border border-gray-200 p-2"
                  placeholder="Ask the seller a question..."
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button size="sm" variant="outline">
                    Question 1
                  </Button>
                  <Button size="sm" variant="outline">
                    Question 2
                  </Button>
                  <Button size="sm" variant="outline">
                    Question 3
                  </Button>
                  <Button size="sm" variant="outline">
                    Question 4
                  </Button>
                </div>
                <Button className="w-full">
                  Ask Question
                </Button>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <Card className="bg-white rounded-lg shadow">
                    <CardContent>
                      <img
                        alt="Product image"
                        className="w-full h-48 object-cover rounded-t-lg"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "200/200",
                          objectFit: "cover",
                        }}
                        width="200"
                      />
                      <div className="p-4 space-y-2">
                        <h3 className="font-semibold text-lg">Massage</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500">from 3,500 ₽ per service</p>
                          <div className="flex items-center space-x-2">
                            <LocateIcon className="h-4 w-4 text-gray-500" />
                            <p className="text-gray-500">Saint Petersburg, Gorkovskaya</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500" />
                            <p className="text-gray-500">Yesterday 22:49</p>
                          </div>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Seller Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Card className="bg-white rounded-lg shadow">
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
                    <p className="mt-2 text-gray-500">
                      The seller was very responsive and helpful. I had a great experience with this purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
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
                    <p className="mt-2 text-gray-500">
                      The seller was very professional and the item was exactly as described. I'm very satisfied with
                      this purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
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
                    <p className="mt-2 text-gray-500">
                      The seller was a bit slow in responding, but the item was as described and arrived on time.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
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
                    <p className="mt-2 text-gray-500">
                      The seller was very helpful and the item was delivered quickly. I'm satisfied with the overall
                      experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
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
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Card className="bg-white rounded-lg shadow">
                <CardContent>
                  <img
                    alt="Product image"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">Massage</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500">from 3,500 ₽ per service</p>
                      <div className="flex items-center space-x-2">
                        <LocateIcon className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-500">Saint Petersburg, Gorkovskaya</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-500">Yesterday 22:49</p>
                      </div>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
                <CardContent>
                  <img
                    alt="Product image"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Maybelline color tattoo eyeshadow</h3>
                    <p className="text-gray-500">450 ₽</p>
                    <p className="text-gray-500">Saint Petersburg, Moskovskaya</p>
                    <p className="text-gray-500">Today 13:54</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
                <CardContent>
                  <img
                    alt="Product image"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Wallet dkny furla</h3>
                    <p className="text-gray-500">225 ₽</p>
                    <p className="text-gray-500">Saint Petersburg, Admiralteyskaya</p>
                    <p className="text-gray-500">Today 13:45</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white rounded-lg shadow">
                <CardContent>
                  <img
                    alt="Product image"
                    className="w-full h-48 object-cover rounded-t-lg"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Commercial space, 15 m²</h3>
                    <p className="text-gray-500">130,000 ₽ per month</p>
                    <p className="text-gray-500">Saint Petersburg, Mayakovskaya</p>
                    <p className="text-gray-500">Yesterday 19:41</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function CalendarIcon(props) {
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


function FilterIcon(props) {
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


function LocateIcon(props) {
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


function SearchIcon(props) {
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


function StarIcon(props) {
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


function XIcon(props) {
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

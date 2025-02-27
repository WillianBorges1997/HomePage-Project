import Link from "next/link"
import {
  Bell,
  CircleUser,
  Menu,
  Book,
  Search,
  ShoppingCart,
  Users,
  Skull,
  NotebookPen,
  LibraryBig
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Carousel } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Homepage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Book className="h-6 w-6" />
              <span className="">E-book</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LibraryBig className="h-4 w-4" />
                Livros em alta
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Sua lista 
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  2
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Social{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <NotebookPen className="h-4 w-4" />
                Crie um livro
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Skull className="h-7 w-7" />
                Livros +18 (necessário confirmação de idade)
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Book className="h-6 w-6" />
                  <span className="sr-only">E-book</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LibraryBig className="h-5 w-5" />
                  Livros em alta
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Sua lista
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    2
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Social
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <NotebookPen className="h-5 w-5" />
                  Crie um livro
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Skull className="h-7 w-7" />
                Livros +18 (necessário confirmação de idade)
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Pesquise por livros..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Histórico</DropdownMenuItem>
              <DropdownMenuItem>Fale conosco</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Lista completa</h1>
          </div>
          <div
          >
           <Carousel>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-auto p-2 lg:px-8">
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-auto p-2 lg:px-8">
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
  <div className="w-full h-full">
    <Card x-chunk="dashboard-02-chunk-0" className="w-full h-full">
      <CardHeader className="p-4">
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição.</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Button size="sm" className="w-full">Clique aqui para ler</Button>
      </CardContent>
    </Card>
  </div>
</div>


           </Carousel>
          </div>
        </main>
      </div>
    </div>
  )
}






  

import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";



<div className="mt-auto p-4">
<Card x-chunk="dashboard-02-chunk-0">
  <CardHeader className="p-2 pt-0 md:p-4">
    <CardTitle>Título</CardTitle>
    <CardDescription>
      Descrição.
    </CardDescription>
  </CardHeader>
  <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
    <Button size="sm" className="w-full">
      Clique aqui para ler
    </Button>
  </CardContent>
</Card>
</div>
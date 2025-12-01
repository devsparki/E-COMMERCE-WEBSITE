import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <SheetHeader className="mb-8">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Button onClick={() => navigate('/')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader className="mb-6">
        <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="h-20 w-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 -mt-1"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm font-semibold text-price mb-2">
                ${item.price.toFixed(2)}
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-sm font-medium w-8 text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 space-y-4">
        <Separator />
        
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="text-price">${total.toFixed(2)}</span>
        </div>

        <Button className="w-full" size="lg" onClick={() => navigate('/checkout')}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

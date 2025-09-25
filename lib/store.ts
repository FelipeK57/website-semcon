import { create } from "zustand";
import { persist } from "zustand/middleware";
import partsDatabase from "./parts-database.json";

interface Part {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  brand?: string;
  price?: number;
  stock?: number;
  specifications?: Record<string, any>;
}

interface QuotePart {
  part: Part;
  quantity: number;
}

interface QuoteState {
  shoppingCart: QuotePart[];
  addPart: (part: Part, quantity?: number) => void;
  removePart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearParts: () => void;
  getAllParts: () => Part[];
  getPartsByCategory: (category: string) => Part[];
  getPartsByBrand: (brand: string) => Part[];
  getPartById: (id: string) => Part | undefined;
  searchParts: (query: string) => Part[];
  getAllCategories: () => Array<{id: string, name: string, description: string, brands: string[]}>;
  getAllBrands: () => Array<{id: string, name: string, description: string, logo: string}>;
}

const useQuoteStore = create<QuoteState>()(
  persist(
    (set) => ({
      shoppingCart: [],

      addPart: (part, quantity = 1) =>
        set((state) => {
          const existing = state.shoppingCart.find(
            (item) => item.part.id === part.id
          );
          if (existing) {
            return {
              shoppingCart: state.shoppingCart.map((item) =>
                item.part.id === part.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            shoppingCart: [...state.shoppingCart, { part, quantity }],
          };
        }),

      removePart: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.filter(
            (item) => item.part.id !== id
          ),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.map((item) =>
            item.part.id === id ? { ...item, quantity } : item
          ),
        })),

      clearParts: () => set({ shoppingCart: [] }),

      // Funciones para acceder a la base de datos de partes
      getAllParts: () => partsDatabase.parts,
      
      getPartsByCategory: (category: string) => 
        partsDatabase.parts.filter(part => 
          part.category.toLowerCase() === category.toLowerCase()
        ),
      
      getPartsByBrand: (brand: string) => 
        partsDatabase.parts.filter(part => 
          part.brand?.toLowerCase() === brand.toLowerCase()
        ),
      
      getPartById: (id: string) => 
        partsDatabase.parts.find(part => part.id === id),
      
      searchParts: (query: string) => {
        const searchTerm = query.toLowerCase();
        return partsDatabase.parts.filter(part => 
          part.name.toLowerCase().includes(searchTerm) ||
          part.description.toLowerCase().includes(searchTerm) ||
          part.brand?.toLowerCase().includes(searchTerm) ||
          part.category.toLowerCase().includes(searchTerm)
        );
      },

      getAllCategories: () => partsDatabase.categories,
      
      getAllBrands: () => partsDatabase.brands,
    }),
    {
      name: "quote-storage", // clave en localStorage
    }
  )
);

export default useQuoteStore;

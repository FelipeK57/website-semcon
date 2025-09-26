import partsDatabase from "./parts-database.json"
import { Part } from "./store"

export function getAllParts(): Part[] {
    return partsDatabase.parts
}

export function getPartById(id: string): Part | undefined {
    return partsDatabase.parts.find(part => part.id === id)
}


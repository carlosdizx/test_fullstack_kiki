import {DocumentType} from "../common/DocumentType";

export default class CivilizedPokemon {
    private readonly name: string;
    private readonly documentNumber: string;
    private readonly documentType: DocumentType;
    private readonly speciesPokemon: string;
    private readonly typePokemon: string;

    constructor(name: string, documentNumber: string, documentType: DocumentType, species: string, type: string) {
        this.name = name;
        this.documentNumber = documentNumber;
        this.documentType = documentType;
        this.speciesPokemon = species;
        this.typePokemon = type;
    }
}
import {DocumentType} from "../common/DocumentType";
import SpeciesPokemon from "../common/SpeciesPokemon";
import TypePokemon from "../common/TypePokemon";

export default class CivilizedPokemon {
    private readonly _name: string;
    private readonly _documentNumber: string;
    private readonly _typeDocument: DocumentType;
    private readonly _species: SpeciesPokemon;
    private readonly _type: TypePokemon;

    constructor(name: string, documentNumber: string, typeDocument: DocumentType, species: SpeciesPokemon, type: TypePokemon) {
        this._name = name;
        this._documentNumber = documentNumber;
        this._typeDocument = typeDocument;
        this._species = species;
        this._type = type;
    }

    get name(): string {
        return this._name;
    }

    get documentNumber(): string {
        return this._documentNumber;
    }

    get typeDocument(): DocumentType {
        return this._typeDocument;
    }

    get species(): SpeciesPokemon {
        return this._species;
    }

    get type(): TypePokemon {
        return this._type;
    }
}
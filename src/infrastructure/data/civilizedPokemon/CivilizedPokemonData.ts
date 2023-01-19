import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm";
import {DocumentType} from "../../../domain/model/common/DocumentType";

@Entity({name:"civilized_pokemons"})
export default class  CivilizedPokemonData{
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    name:string;

    @Column({name:"document_number"})
    documentNumber: string;

    @Column({
        type:"enum",
        enum: DocumentType,
        default: DocumentType.pokeid,
        name:"document_type",
    })
    documentType: DocumentType;

    @Column({name:"species"})
    speciesPokemon: string;

    @Column({name:"type"})
    typePokemon: string;
}
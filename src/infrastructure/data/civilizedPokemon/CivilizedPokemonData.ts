import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm";
import {DocumentType} from "../../../domain/model/common/DocumentType";
import SpeciesPokemon from "../../../domain/model/common/SpeciesPokemon";
import TypePokemon from "../../../domain/model/common/TypePokemon";

@Entity({name:"civilized_pokemons"})
export default class  CivilizedPokemonData{
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column()
    name:string;

    @Column({name:"document_number"})
    documentNumber: string;

    @Column({name:"document_type"})
    documentType: DocumentType;

    @Column({name:"species"})
    speciesPokemon: SpeciesPokemon;

    @Column({name:"type"})
    typePokemon: TypePokemon;
}
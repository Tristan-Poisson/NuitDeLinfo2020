package com.nuitdelinfo.server

import kotlinx.serialization.Serializable
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import javax.persistence.*

@Entity
@Serializable
data class SurferFormModel(val city: String,
                           @OneToOne(cascade = [CascadeType.ALL]) val spot: Spot,
                           @OneToOne(cascade = [CascadeType.ALL]) val waterman: Waterman,
                           val swimmingStart: String,
                           val swimmingDuration: String,
                           @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long = 0) {
    @Entity
    @Serializable
    data class Spot(val name: String,
                    val swimmers: Int? = null,
                    val watermen: Int? = null,
                    val fishingBoats: Int? = null,
                    val leisureBoats: Int? = null,
                    val sailBoats: Int? = null,
                    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long = 0)

    @Serializable
    enum class Product {
        SUNSCREEN, PERFUME, DEODORANT, MOISTURIZER, MAKEUP, GASOLINE, CIGARETTE, FERTILIZER_OR_PESTICIDE, PAINT, OTHER, MAGIC
    }

    @Entity
    @Serializable
    data class Waterman(val name: String,
                        @ElementCollection @Enumerated(EnumType.ORDINAL) val usedProducts: Set<Product> = setOf(),
                        @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long = 0)

}

@Repository
interface SurferFormRepository : CrudRepository<SurferFormModel, Long> {

}
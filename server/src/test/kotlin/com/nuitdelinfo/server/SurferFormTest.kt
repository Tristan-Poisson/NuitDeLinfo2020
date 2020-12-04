package com.nuitdelinfo.server

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.test.context.ContextConfiguration

@ContextConfiguration(classes = [ServerApplication::class])
@DataJpaTest
class SurferFormTest @Autowired constructor(val surferFormRepository: SurferFormRepository) {
    @Test
    fun testSurferFormRepository() {
        val form1 = SurferFormModel(
            "Lyon",
            SurferFormModel.Spot("Rhône"),
            SurferFormModel.Waterman("Pedro"),
            "2020-12-04T01:05:00Z",
            "2020-12-04T04:32:00Z")
        val form2 = SurferFormModel(
            "Paris",
            SurferFormModel.Spot("Seine"),
            SurferFormModel.Waterman("Pedro"),
            "2020-12-04T01:05:00Z",
            "2020-12-04T04:32:00Z")
        surferFormRepository.save(form1)
        surferFormRepository.save(form2)
        val res = surferFormRepository.findAll().toList()
        assert(res[0].city == "Lyon")
        assert(res[1].city == "Paris")
    }

    @Test
    fun testFormSerialization() {
        val form = """
{
    "city": "Lyon",
    "spot": {
        "name": "Rhône",
        "swimmers": 10,
        "watermen": 5,
        "fishingBoats": 2,
        "leisureBoats": 6,
        "sailBoats": 1
    },
    "waterman": {
        "name": "Patrick",
        "usedProducts": [
            "SUNSCREEN",
            "PERFUME",
            "DEODORANT",
            "MOISTURIZER",
            "MAKEUP",
            "GASOLINE",
            "CIGARETTE",
            "FERTILIZER_OR_PESTICIDE",
            "PAINT",
            "OTHER",
            "MAGIC"
        ]
    },
    "swimmingStart": "2020-12-04T00:33:35Z",
    "swimmingDuration": "P30M"
} 
""".trimIndent()
        val parsed: SurferFormModel = Json.decodeFromString(form)
        print(parsed)
    }
}
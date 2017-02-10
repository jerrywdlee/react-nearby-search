# 説明
+ 下記仕様は _順天堂大学周辺の郵便局_ を調べた結果です。
+ 検索URL：
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.7021342,139.7586458&radius=500&types=post_office&sensor=false&language=ja&key=AIzaSyBQ9RuHlZzc1xzlWVmPd6E0pGbZgZj_DVk
+ getAreaNameメソッドが返したのは、半径0で`"results"`配列の0番値

# 仕様(JSON)
```json
{
   "html_attributions" : [],
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : 35.7001222,
               "lng" : 139.7624847
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/post_office-71.png",
         "id" : "49e299e45bc2290d30ccc85109a9176902250ab5",
         "name" : "神田駿河台郵便局",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 960,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114180631566146970550/photos\"\u003eatachi boo\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAKpiZMbLCLIklKHz7plnA6TqJGgxDIDQdzyKMZ2kHjN4ZgZq-2xQ5u_zn2CS2tr4ip6J6U5zs97CswrlJT8lZxTitINu8IfG5ujpT6jnxjXQrdHhmCeJDZ20WAB-9NFfBLvwWtLOipbT8GMj24t3PQIsNDzB-Bmo4R4ooOQshCLfEhCOfdH7UEEKBe8_o6NpG1TnGhQcWLsVKP_si1vWo4zid_6bq-2vyQ",
               "width" : 1280
            }
         ],
         "place_id" : "ChIJURGmfReMGGAR12ivfHjZMCo",
         "rating" : 3.5,
         "reference" : "CmRRAAAAwZCAStIjIB-33CDYX8fUppD3ZshsBvo0i0ILAUt3zR3-M_8MpT1d-I6GgrMCyBxQ46H30sbDTxToykAFN4sIzHkcK4X6nRqlyH8Xg4j35ENc7saUkDcAob8fR083aZEBEhByDTKUQY5NgtwEcAyLBbgkGhRCd9fUFw75VsCEdDaTsz-I0sWqFA",
         "scope" : "GOOGLE",
         "types" : [ "post_office", "finance", "point_of_interest", "establishment" ],
         "vicinity" : "千代田区神田駿河台２丁目３−４５"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 35.7049626,
               "lng" : 139.7571696
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/post_office-71.png",
         "id" : "ea2b3ae5b899c90b606cb6bbadda880da2568e74",
         "name" : "本郷一郵便局",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 4032,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100277222863352932886/photos\"\u003eおかもとりょういち\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAFQP5KEtGOdu7-MJd6UE9UNgrxZXb5ptw_NunSOBMa5pup9ebaaiJrvZ5-MTK4IrPoeFMhFdjJLKjNdqzPm4hmxvyw0rt-3-0Q3zCcqpCTTU1ZZPO484TRpp0-hvRCrWMVAwgoHxz-dFMMJb4BSKCcJhbnZ-2oY12Opt-eqlG2ALEhDIog0k8G1BV5ddLhJC7vMqGhSjhvtV93agXQ929e1lhCSsojq47A",
               "width" : 3024
            }
         ],
         "place_id" : "ChIJFxjbrj6MGGARMD7Cg0pyv-8",
         "rating" : 5,
         "reference" : "CmRSAAAARARIjiCOkKADWr4dneDJx4_7pdA4D_TG2PGCmieMDrCUzq5vYAMAEfr1SjXzPF_W1wrWC5_-cJMTXI6h24dcJsCZ7QD9Hzc3k_nxRj4a7lHnK9LneMb2snUDHRkwPGziEhCnaPs4zR4cMRSpFK9gXTQNGhSIFOdv3h9_6-2RSU6DPBZOE8O0RA",
         "scope" : "GOOGLE",
         "types" : [ "post_office", "finance", "point_of_interest", "establishment" ],
         "vicinity" : "文京区本郷１丁目２７−８"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 35.69955909999999,
               "lng" : 139.7571274
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/post_office-71.png",
         "id" : "eae0345eb69409e77e4c09b393bada324137c7fa",
         "name" : "西神田郵便局",
         "opening_hours" : {
            "exceptional_date" : [],
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3818,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/110807531686252733131/photos\"\u003eMasahiko Motono\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAIuOZ60SY0FRS7UJfoQsE7614e_RI3uXb4O_Tg1NLrxO8gdEuYNWfODUeskYUKcCxvH3HOoXI6MkDyrV1uXmqmWfI7M3vv1WUfOFm5WdmOhhI-ruJxLkBhGiAAr7KtvcSYw4VKyHVxYKKjtHCS3VIP5Ek_HucUPGVnWiQBknLUg0EhCb9eN0TROV7n6Lbzzicd86GhQpk_n5teGkWQISVQo3UU3AwvRuSQ",
               "width" : 5719
            }
         ],
         "place_id" : "ChIJc_ie5xWMGGARObUc7rEMNNE",
         "reference" : "CmRSAAAAR1k7-DomJnG5Vyx2W8c7z4GKG85vJwcvjJe-QUJcwUUCQSmkKPuWI7upqw2hjBD6XoD8DfMtfvj5UEouO_URuFZF8sOnTg-Gt4RgRhRElvWMGP_wn3MUH-NLw5uddqcfEhAqeU9BxaBVLsiYx9GUIKL-GhQKEm9Dr1IeFDsi5MMh_Lt235KNWg",
         "scope" : "GOOGLE",
         "types" : [ "post_office", "finance", "point_of_interest", "establishment" ],
         "vicinity" : "千代田区西神田１丁目４−５"
      }
   ],
   "status" : "OK"
}
```

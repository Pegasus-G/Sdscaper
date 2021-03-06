document.write('<link rel="stylesheet" href="mycss.css?time='+new Date().getTime()+'" />');

const app=new Vue({
    el:"#app",
    data:{
        input_x:121.699218,
        input_y:null,
        inputwh:"true",
        inputcellsize:30,
        response:null,
        leftup:[121.45946,31.04565],
        rightdn:[121.46367,31.04305],
        clicktimes:0,
        tb:"source_data",
        tbs: [{
          value: 'source_data',
          label: '手机采集数据集'
        }, {
          value: 'test',
          label: '手动采集数据集'
        }, {
          value: 'point_data',
          label: '噪声源数据集'
        }],
        input_lu:null,
        input_rd:null,
        label:null,
        estdb:"未指定数据与方法",
        methodd:0,
        est:null,
        extent_poly:[
    [
        121.4596,
        31.04493
    ],
    [
        121.46011,
        31.04302
    ],
    [
        121.46371,
        31.04419
    ],
    [
        121.46326,
        31.04571
    ]
],
        button_name:"设置范围",
        clicking:false,
        features: [
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.459790556619311, 31.044872166202868 ], [ 121.460228377444224, 31.044950212523919 ], [ 121.460243605994862, 31.044856937652515 ], [ 121.459805785169607, 31.04478269846901 ], [ 121.459790556619311, 31.044872166202868 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460300713058842, 31.044963537505556 ], [ 121.460761376709712, 31.045043487395322 ], [ 121.460780412397554, 31.044955923230294 ], [ 121.460315941609366, 31.044875973340414 ], [ 121.460300713058842, 31.044963537505556 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.462419673516621, 31.045438769023548 ], [ 121.462815267834827, 31.045511801820595 ], [ 121.462819836399973, 31.045470684734511 ], [ 121.462880750601613, 31.045478299009602 ], [ 121.462944710513426, 31.045088448118491 ], [ 121.463171615914945, 31.045131088059662 ], [ 121.463197504450733, 31.045012305366271 ], [ 121.462868567761262, 31.044946822599371 ], [ 121.46286399919623, 31.044989462540542 ], [ 121.462551813912143, 31.04493463975902 ], [ 121.462527448231441, 31.045065605292876 ], [ 121.462643185214716, 31.045088448118491 ], [ 121.462632525229452, 31.045161545160482 ], [ 121.462490899710502, 31.045140225190011 ], [ 121.462419673516621, 31.045438769023548 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.459840180149769, 31.044568964191615 ], [ 121.460282759896842, 31.044648914081552 ], [ 121.46030845807573, 31.044500435714713 ], [ 121.459865878328657, 31.044429051884482 ], [ 121.459840180149769, 31.044568964191615 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460995836771218, 31.044904182658161 ], [ 121.46147553610993, 31.044992698607576 ], [ 121.461495523582386, 31.044872773772898 ], [ 121.461015824243674, 31.044792823883132 ], [ 121.460995836771218, 31.044904182658161 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461538163523599, 31.0450081175149 ], [ 121.461957900445057, 31.045076645991859 ], [ 121.461975032564467, 31.044965287216829 ], [ 121.461555295643009, 31.044896758739927 ], [ 121.461538163523599, 31.0450081175149 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.462040705688239, 31.045115478795527 ], [ 121.462410683321124, 31.045177953923702 ], [ 121.462430480436566, 31.045069831215574 ], [ 121.462060426661012, 31.045005871303761 ], [ 121.462040705688239, 31.045115478795527 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.462087838051829, 31.044894702885632 ], [ 121.462492917493464, 31.044961708507504 ], [ 121.462509668898846, 31.044853585799377 ], [ 121.462106112312185, 31.04478810303242 ], [ 121.462087838051829, 31.044894702885632 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461612707278164, 31.044786580177462 ], [ 121.462001035314188, 31.044852062944418 ], [ 121.462019309574657, 31.04474850880138 ], [ 121.46162793582846, 31.044687594599683 ], [ 121.461612707278164, 31.044786580177462 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461113210823797, 31.044690640309771 ], [ 121.461538087380987, 31.044762214496675 ], [ 121.461556361641343, 31.044660183208723 ], [ 121.461137576504498, 31.044585563311646 ], [ 121.461113210823797, 31.044690640309771 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461752809942084, 31.044556629065784 ], [ 121.46224469212126, 31.044637340383208 ], [ 121.462266012091902, 31.044524649109821 ], [ 121.461771084202667, 31.044440892082566 ], [ 121.461752809942084, 31.044556629065784 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.462326926293642, 31.044673888904256 ], [ 121.462827945603109, 31.044759168786598 ], [ 121.462843174153406, 31.044634294673031 ], [ 121.462351291974343, 31.044553583355778 ], [ 121.462326926293642, 31.044673888904256 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461230089948387, 31.044495714864127 ], [ 121.461586057314705, 31.044558532634653 ], [ 121.461601285865228, 31.044476679176057 ], [ 121.461245318498683, 31.044419572111906 ], [ 121.461230089948387, 31.044495714864127 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460506681167061, 31.04440898643632 ], [ 121.460502874029515, 31.044407082867433 ], [ 121.460480031203787, 31.044500357738837 ], [ 121.460487645478992, 31.044603150454332 ], [ 121.460537138268108, 31.04469452175702 ], [ 121.460636123845887, 31.044740207408363 ], [ 121.460826480726354, 31.044778278784445 ], [ 121.460864552102493, 31.044620282573515 ], [ 121.460655159533957, 31.044587921903979 ], [ 121.46065325596507, 31.04464502896813 ], [ 121.460603763176181, 31.044633607555152 ], [ 121.46057520964402, 31.044580307628717 ], [ 121.460563788231269, 31.044507972014099 ], [ 121.460607570313726, 31.044507972014099 ], [ 121.460628509570682, 31.044431829261878 ], [ 121.460506681167061, 31.04440898643632 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.459893732012148, 31.044301434798843 ], [ 121.460329649268402, 31.044371866844461 ], [ 121.460352492093904, 31.0442348098906 ], [ 121.45991276769999, 31.044168184982528 ], [ 121.459893732012148, 31.044301434798843 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460229711905995, 31.044006381634006 ], [ 121.460578064997335, 31.044095849367864 ], [ 121.460608522098156, 31.043998767358744 ], [ 121.460262072575702, 31.043907396056227 ], [ 121.460229711905995, 31.044006381634006 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460674671114177, 31.044138679666084 ], [ 121.461070613425633, 31.044247183087954 ], [ 121.461093456251248, 31.044134872528367 ], [ 121.460703224646338, 31.044024465537781 ], [ 121.460674671114177, 31.044138679666084 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460350588525259, 31.043753682875135 ], [ 121.460676098790756, 31.043841247040334 ], [ 121.460706555891576, 31.0437460686001 ], [ 121.460382949194738, 31.043656600866242 ], [ 121.460350588525259, 31.043753682875135 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460806969146191, 31.043875511278699 ], [ 121.461189586475783, 31.043993532544718 ], [ 121.461227657851921, 31.043881221985075 ], [ 121.460845040522102, 31.043761297150567 ], [ 121.460806969146191, 31.043875511278699 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460469561575522, 31.04349908054764 ], [ 121.46077603615295, 31.043598066125419 ], [ 121.460808396822657, 31.043493369841208 ], [ 121.460501922245228, 31.043396287832145 ], [ 121.460469561575522, 31.04349908054764 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460890250281267, 31.043652317836305 ], [ 121.461267156904654, 31.043758917689345 ], [ 121.461295710436588, 31.043635185717122 ], [ 121.460926418088633, 31.043532393001627 ], [ 121.460890250281267, 31.043652317836305 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.46288471449644, 31.044874409009072 ], [ 121.463179767661117, 31.044929136612144 ], [ 121.463208321193278, 31.044798266256851 ], [ 121.463060794610882, 31.044662636979456 ], [ 121.463067932993894, 31.044619806681386 ], [ 121.46292754479451, 31.044603150454225 ], [ 121.46288471449644, 31.044874409009072 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461620744810304, 31.044152099826068 ], [ 121.461637401037294, 31.044052162463903 ], [ 121.461516048525866, 31.044016470548844 ], [ 121.461485115532852, 31.044111648989077 ], [ 121.461428008468758, 31.044099751683905 ], [ 121.461413731702621, 31.044154479287148 ], [ 121.461649298342238, 31.04421872473414 ], [ 121.461658816186329, 31.044163997131069 ], [ 121.461620744810304, 31.044152099826068 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461710402900778, 31.044246516838712 ], [ 121.461924554391246, 31.044289347136782 ], [ 121.461934072235337, 31.044232240072631 ], [ 121.461903139242324, 31.04422510168979 ], [ 121.461926933852325, 31.044134682171546 ], [ 121.461788925114021, 31.044106128639385 ], [ 121.46176275104294, 31.044196548157629 ], [ 121.461722300205722, 31.04419178923564 ], [ 121.461710402900778, 31.044246516838712 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461994796080262, 31.044329322081794 ], [ 121.462225603797719, 31.044379290762876 ], [ 121.462235121641697, 31.044324563159805 ], [ 121.462199429726638, 31.044317424776793 ], [ 121.462218465414708, 31.04423414364156 ], [ 121.462080456676404, 31.04420321064849 ], [ 121.462054282605322, 31.044286491783723 ], [ 121.46200431392424, 31.044281732861563 ], [ 121.461994796080262, 31.044329322081794 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.46166880992233, 31.043905968379622 ], [ 121.461899617640015, 31.043953557599796 ], [ 121.461913894405924, 31.043901209457633 ], [ 121.461878202490865, 31.043889312152633 ], [ 121.461899617640015, 31.04380365155632 ], [ 121.461744952674493, 31.043770339102171 ], [ 121.461718778603412, 31.043863138081552 ], [ 121.461675948305341, 31.043858379159563 ], [ 121.46166880992233, 31.043905968379622 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461388033523704, 31.043825066705494 ], [ 121.461602185014172, 31.043867897003565 ], [ 121.46161170285815, 31.043810789939414 ], [ 121.461587908248148, 31.043801272095266 ], [ 121.461609323397184, 31.043706093655032 ], [ 121.461452278970924, 31.04367040174003 ], [ 121.461430863821775, 31.043777477485264 ], [ 121.461397551367796, 31.043770339102252 ], [ 121.461388033523704, 31.043825066705494 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461961483626112, 31.043996387897721 ], [ 121.462208947570787, 31.044043977117951 ], [ 121.462218465414878, 31.0439868700538 ], [ 121.462182773499705, 31.043979731670788 ], [ 121.462199429726809, 31.043889312152658 ], [ 121.462054282605266, 31.043863138081576 ], [ 121.462032867456344, 31.04395355759965 ], [ 121.461978139853102, 31.043944039755729 ], [ 121.461961483626112, 31.043996387897721 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.462306612262466, 31.04442292673945 ], [ 121.462525745128204, 31.044465168784214 ], [ 121.462549131911715, 31.044348954619664 ], [ 121.462439934205833, 31.044332826095705 ], [ 121.462467837427951, 31.044230967249625 ], [ 121.462558002176124, 31.044246773372599 ], [ 121.462611066799425, 31.044064427457776 ], [ 121.462277182625641, 31.043965959471898 ], [ 121.46222440010321, 31.04413165154866 ], [ 121.462375777161682, 31.044186571390135 ], [ 121.462340373879357, 31.044309721413242 ], [ 121.462285855626718, 31.044296898911895 ], [ 121.462257670303771, 31.044415411595814 ], [ 121.462298075038774, 31.044418475817523 ], [ 121.462306612262466, 31.04442292673945 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460219876800664, 31.043688327012806 ], [ 121.460053314530313, 31.043666911863827 ], [ 121.46003665830321, 31.04377874653105 ], [ 121.460112801055601, 31.043790643836051 ], [ 121.460112801055601, 31.043823956290201 ], [ 121.460203220573675, 31.043835853595201 ], [ 121.460219876800664, 31.043688327012806 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460153013946396, 31.043950305669604 ], [ 121.459986451676045, 31.043928890520625 ], [ 121.459969795448941, 31.044040725187848 ], [ 121.460045938201333, 31.044052622492849 ], [ 121.460045938201333, 31.044085934946999 ], [ 121.460136357719406, 31.044097832252 ], [ 121.460153013946396, 31.043950305669604 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460291951119856, 31.043433555882707 ], [ 121.460125388849505, 31.043412140733729 ], [ 121.460108732622402, 31.043523975400952 ], [ 121.460184875374793, 31.043535872705952 ], [ 121.460184875374793, 31.043569185160102 ], [ 121.460275294892867, 31.043581082465103 ], [ 121.460291951119856, 31.043433555882707 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.460898379660989, 31.045105036541599 ], [ 121.461376556144842, 31.045197930699203 ], [ 121.461394830405311, 31.045105036541599 ], [ 121.460916653921458, 31.04501061952891 ], [ 121.460898379660989, 31.045105036541599 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461458790317124, 31.045220773524989 ], [ 121.461883666874428, 31.045293870566979 ], [ 121.461897372569638, 31.045196407844116 ], [ 121.461478587432794, 31.04511721938195 ], [ 121.461458790317124, 31.045220773524989 ] ] ] ] } },
{ "type": "Feature", "properties": { "Id": 0, "height": 0, "impedence": 0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 121.461964378191624, 31.04532280481294 ], [ 121.462369457633258, 31.045395901854931 ], [ 121.462384686183782, 31.045304530552414 ], [ 121.461984175307293, 31.045232956365339 ], [ 121.461964378191624, 31.04532280481294 ] ] ] ] } }
],
        
    },
    computed:{
        inputtl: function(){
            return this.leftup[0]+","+this.leftup[1];
        },
        inputbr: function(){
            return this.rightdn[0]+","+this.rightdn[1];
        },
    },
    beforeCreate(){
    },
    mounted(){
        this.MapLoad();      
        this.refreshData();
    },
    watch:{
    },
    methods:{
        MapLoad:function() {
            this.map = new T.Map('mapDiv');
            this.map.centerAndZoom(new T.LngLat(121.46166,31.04438), 18);
            this.map.removeEventListener("click",this.MapClick);
            this.map.addEventListener("click",this.MapClick);
            this.map.removeEventListener("mousemove",this.MapMousemove);
            this.map.addEventListener("mousemove",this.MapMousemove);
            this.map.addControl(new T.Control.Zoom());
            this.map.addControl(new T.Control.Scale());
            this.map.addControl(new T.Control.MapType());
            var latlng = new T.LngLat(0,0);
            this.label = new T.Label({
                text: "天地图",
                position: latlng,
                offset: new T.Point(-9, 0)
            });
            this.map.addOverLay(this.label);
            console.log(11);
        },
        MapClick: function(e) {
            //this.clicktimes+=1;
            this.input_x=e.lnglat.getLng();
            this.input_y=e.lnglat.getLat();
            if(this.clicktimes==1){
                this.leftup[0]=this.input_x;
                this.leftup[1]=this.input_y;
                this.input_lu=this.inputtl;
            }
            if(this.clicktimes==2){
                this.rightdn[0]=this.input_x;
                this.rightdn[1]=this.input_y;
                this.input_rd=this.inputbr;
            }
            if(this.clicking){
                this.extent_poly.push([this.input_x,this.input_y]);
            }
		    console.log(this.input_x,this.input_y);
	    },
	    MapMousemove: function (e){
            var bs = this.map.getBounds();   //获取可视区域
            var bssw = bs.getSouthWest();   //可视区域左下角
            var bsne = bs.getNorthEast();   //可视区域右上角
            this.leftup=[bssw.lng,bsne.lat];
            this.rightdn=[bsne.lng,bssw.lat];
            i=e.lnglat.getLng();
            j=e.lnglat.getLat();
            if(this.methodd==1){
                draw=true
                for (var pp=0;pp<this.features.length;pp++){
                    extbuild=this.features[pp].geometry.coordinates[0][0];
                    if(this.isInPolygon([i,j],extbuild)){
                        draw=false
                        //console.log(i,j);
                    }
                    
                }
                if(draw){
                    d_all=0;
    	                db=0;
    	                for (var k=0;k<this.response.length;k++) {
    	                    d_all+=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j)**2;
    	                }
    	                for (var k=0;k<this.response.length;k++) {
    	                    d2=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j)**2;
    	                    db+=d2/d_all*this.response[k].dB;
    	                }
    	                this.estdb=db+" db";
    	                this.est=db;
                }else{
                    this.estdb="建筑物内";
                }
            }
            if(this.methodd==2){
                draw=true
                for (var pp=0;pp<this.features.length;pp++){
                    extbuild=this.features[pp].geometry.coordinates[0][0];
                    if(this.isInPolygon([i,j],extbuild)){
                        draw=false
                        //console.log(i,j);
                    }
                    
                }
                if(draw){
	                pointEffects=[];
	                for (var k=0;k<this.response.length;k++) {
	                    d2=this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j);
	                    pointEffect=parseFloat(this.response[k].dB)-this.degenerate(d2);
	                    pointEffects.push(pointEffect);
	                }
	                db=this.aggregate(pointEffects);
	                this.estdb=db+" db";
	                this.est=db;
                }else{
                    this.estdb="建筑物内";
                }
            }
            
            
	    },
	    clickextent: function(){
	        this.clicktimes=0;
	    },
	    clickextentnew:function(){
	        if(this.button_name=="设置范围"){
	            this.button_name="好了";
	            this.extent_poly=[];
	            this.clicking=true;
	        }else{
	            this.button_name="设置范围"
	        }
	    },
	    refreshData:async function() {
	        var link="select_bytime.php?time=";
            link=link+this.inputwh;
            link=link+"&tab="+this.tb;
            info = await axios.get(link).catch(function (error) {console.log(error);});
            console.log(info);
            this.response = info["data"]; 
	    },
	    testfunc:async function(){
	        var link="select_bytime.php?time="+this.inputwh+"&tab=test";
            info = await axios.get(link).catch(function (error) {console.log(error);});
            console.log(info);
            responseA = info["data"]; 
            dda={lngs:[],
                lats:[],
                dbs:[],
                dbidws:[],
                dbsprs:[]
                
            };
            
            
            for (var i=0;i<responseA.length;i++) {
                dda.lngs.push(parseFloat(responseA[i].Longitude));
                dda.lats.push(parseFloat(responseA[i].Latitude));
                dda.dbs.push(parseFloat(responseA[i].dB));
                
                //dbidws
                d_all=0;
                db=0;
                for (var k=0;k<this.response.length;k++) {
                    d_all+=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,responseA[i].Longitude,responseA[i].Latitude)**2;
                }
                for (var k=0;k<this.response.length;k++) {
                    d2=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,responseA[i].Longitude,responseA[i].Latitude)**2;
                    db+=d2/d_all*this.response[k].dB;
                }
                dda.dbidws.push(db);
                
                //dbsprs
                pointEffects=[];
                for (var k=0;k<this.response.length;k++) {
                    d2=this.getDistance(this.response[k].Longitude,this.response[k].Latitude,responseA[i].Longitude,responseA[i].Latitude);
                    pointEffect=parseFloat(this.response[k].dB)-this.degenerate(d2);
                    pointEffects.push(pointEffect);
                }
                db=this.aggregate(pointEffects);
                dda.dbsprs.push(db);
	                  
	       }
	       console.log(dda);
	    },
	    refreshData_old:async function() {
            var link="getdata.php?wh=";
            link=link+this.inputwh;
            link=link+"&tb="+this.tb;
            info = await axios.get(link).catch(function (error) {console.log(error);});
            console.log(info);
            this.response = info["data"];
            
	    },
	    showraw:async function(){
	        this.map.clearOverLays();
	        response=this.response;
	        for (var i=0;i<this.response.length;i++) { 
                var circle = new T.Circle(new T.LngLat(response[i].Longitude,response[i].Latitude), 3,{color:"white",weight:0.2,opacity:0.6,fillColor:this.getColor(response[i].dB),fillOpacity:0.7,lineStyle:"solid"});
                this.map.addOverLay(circle);
            }
	    },
	    click_idw: function(){
	        this.methodd=1;
	        this.showidw(this.inputcellsize);
	    },
	    click_raw: function(){
	        this.methodd=0;
	        this.showraw();
	    },
	    click_spr:function(){
	        this.methodd=2;
	        this.showspr(this.inputcellsize);
	    },
	    lonToMeter: function (degree){
	        return degree*this.getDistance(120,31,121,31);
	    },
	    latToMeter: function(degree){
	        return degree*this.getDistance(121,30,121,31);
	    },
	    getDistance: function( lng1,lat1,lng2,lat2){
            var radLat1 = lat1 * Math.PI / 180.0
            var radLat2 = lat2 * Math.PI / 180.0
            var a = (lat1 - lat2) * Math.PI / 180.0;
            var b = (lng1 - lng2) * Math.PI / 180.0;
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
            s = s * 6378137 ;
            s = Math.round(s * 10000) / 10000;
            return s;
        },
	    showidw:async function(cellsize){
	        this.map.clearOverLays();
	        lonper=cellsize/this.lonToMeter(1);
	        latper=cellsize/this.latToMeter(1);
	        console.log(lonper,latper);
	        response=this.response;
	        for (var i=this.leftup[0];i<this.rightdn[0];i+=lonper){
	            for (var j=this.leftup[1];j>this.rightdn[1];j-=latper){
	                if(this.isInPolygon([i,j],this.extent_poly)){
	                    draw=true
	                    for (var pp=0;pp<this.features.length;pp++){
	                        extbuild=this.features[pp].geometry.coordinates[0][0];
    	                    if(this.isInPolygon([i,j],extbuild)){
    	                        draw=false
                                //console.log(i,j);
                            }
	                        
	                    }
	                    if(draw){
	                        d_all=0;
            	                db=0;
            	                for (var k=0;k<this.response.length;k++) {
            	                    d_all+=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j)**2;
            	                }
            	                for (var k=0;k<this.response.length;k++) {
            	                    d2=1/this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j)**2;
            	                    db+=d2/d_all*this.response[k].dB;
            	                }
            	                var bounds = new T.LngLatBounds(new T.LngLat(i-lonper/2, j-latper/2),new T.LngLat( i+lonper/2, j+latper/2));
                                var rect = new T.Rectangle(bounds,{color:"#FFFFFF",weight:0.5,fillOpacity:0.5,fillColor:this.getColor(db)});
                                this.map.addOverLay(rect);
	                    }
	                    
	                }
	            }
	        }
	        //console.log(i,j);
	    },
	    degenerate: function(r){
			if (r<1/Math.pow(2*Math.PI,0.5))
				return 0;
			return 10 * Math.log (4 * Math.PI * r * r)/Math.log(10);
		},
		aggregate: function(effs){
			res = 0;
			for (var i=0;i<effs.length;i++) {
				res += Math.pow (10, 0.1 * effs[i]);
			}
			return 10 * Math.log(res)/Math.log(10);
		},
	    showspr: function(cellsize){
	        	        this.map.clearOverLays();
	        lonper=cellsize/this.lonToMeter(1);
	        latper=cellsize/this.latToMeter(1);
	        console.log(lonper,latper);
	        response=this.response;
	        for (var i=this.leftup[0];i<this.rightdn[0];i+=lonper){
	            for (var j=this.leftup[1];j>this.rightdn[1];j-=latper){
	                if(this.isInPolygon([i,j],this.extent_poly)){
	                    draw=true
	                    for (var pp=0;pp<this.features.length;pp++){
	                        extbuild=this.features[pp].geometry.coordinates[0][0];
    	                    if(this.isInPolygon([i,j],extbuild)){
    	                        draw=false
                                //console.log(i,j);
                            }
	                        
	                    }
	                    if(draw){
        	                pointEffects=[];
        	                for (var k=0;k<this.response.length;k++) {
        	                    d2=this.getDistance(this.response[k].Longitude,this.response[k].Latitude,i,j);
        	                    pointEffect=parseFloat(this.response[k].dB)-this.degenerate(d2);
        	                    pointEffects.push(pointEffect);
        	                }
        	                db=this.aggregate(pointEffects);
        	                var bounds = new T.LngLatBounds(new T.LngLat(i-lonper/2, j-latper/2),new T.LngLat( i+lonper/2, j+latper/2));
                            var rect = new T.Rectangle(bounds,{color:"#FFFFFF",weight:0.5,fillOpacity:0.5,fillColor:this.getColor(db)});
                            this.map.addOverLay(rect);
	                    }
	                }
	            }
	        }
	    },
	    getColor: function (dbi){
	        low=45;
	        high=80;
	        mid=low/2+high/2;
	        db=parseFloat(dbi);
	        r = parseInt(db > mid ? 255 :255/(mid-low)*(db-low) );
	        
	        r= r>255?255:r;
	        r=r<0?0:r;
	        r=r.toString(16);
	        r= r.length==1 ? "0"+r:r
	        
	        g = parseInt(db < mid ? 255 :255/(mid-low)*(high-db) );
	        
	        g= g>255?255:g;
	        g=g<0?0:g;
	        g=g.toString(16);
	        g= g.length==1 ? "0"+g:g
	        b=(16).toString(16);
	        b= b.length==1 ? "0"+b:b
	        
	        //console.log("#"+r+g+b);
	        return "#"+r+g+b;
	    },
	    isInPolygon: function(checkPoint, polygonPoints) {
        var counter = 0;
        var i;
        var xinters;
        var p1, p2;
        var pointCount = polygonPoints.length;
        p1 = polygonPoints[0];
        for (i = 1; i <= pointCount; i++) {
            p2 = polygonPoints[i % pointCount];
            if (
                checkPoint[0] > Math.min(p1[0], p2[0]) &&
                checkPoint[0] <= Math.max(p1[0], p2[0])
            ) {
                if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
                    if (p1[0] != p2[0]) {
                        xinters =
                            (checkPoint[0] - p1[0]) *
                                (p2[1] - p1[1]) /
                                (p2[0] - p1[0]) +
                            p1[1];
                        if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
                            counter++;
                        }
                    }
                }
            }
            p1 = p2;
        }
        if (counter % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }
    },
    
});
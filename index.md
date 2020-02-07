<!DOCTYPE html>
<html>
  <head>
	<title>TemNotes</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Bootstrap 4 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker">
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- JS -->
	<script src="populate.js"></script>
	<script src="increment.js"></script>
	<script src="imageswap.js"></script>
	
  </head>
  <body>
  
	<div class="top-header">
		<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
			<p>TemNotes</p>
			</div>
		</div>
		</div>
	</div>
	
	<div class="team_names">
		<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
			<p>My Team</p>
			</div>
			<div class="col-md-6">
			<p>Opponent's Team</p>
			</div>
		</div>
		</div>
	</div>
	
	<div class="team_select">
		<div class="container-fluid">
		<div class="row">
			<div class="col-md-1">
				<p>
				<select id="temdrop1"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop2"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop3"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop4"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop5"></select>
				</p>
			</div>
			<div class="col-2">
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop6"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop7"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop8"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop9"></select>
				</p>
			</div>
			<div class="col-md-1">
				<p>
				<select id="temdrop10"></select>
				</p>
			</div>
		</div>
		</div>
	</div>	

	<div class="teams">
		<div class="row">
			<div class="col-1">
			<img src="\images\m1.png" id="m1" alt="My Tem 1" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		<div class="col-2">
		</div>
		<div class="col-1">
			<img src="\images\o1.png" id="o1" alt="Opp Tem 1" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		</div>
		
		<br>
		
		<div class="row">
			<div class="col-1">
			<img src="\images\m1.png" id="m2" alt="My Tem 2" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		<div class="col-2">
		</div>
		<div class="col-1">
			<img src="\images\o1.png" id="o2" alt="Opp Tem 2" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		</div>
		
		<br>
		
		<div class="row">
			<div class="col-1">
			<img src="\images\m1.png" id="m3" alt="My Tem 3" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		<div class="col-2">
		</div>	
		<div class="col-1">
			<img src="\images\o1.png" id="o3" alt="Opp Tem 3" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		</div>
		
		<br>
		
		<div class="row">
			<div class="col-1">
			<img src="\images\m1.png" id="m4" alt="My Tem 4" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		<div class="col-2">
		</div>	
		<div class="col-1">
			<img src="\images\o1.png" id="o4" alt="Opp Tem 4" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		</div>
		
		<br>
		
		<div class="row">
			<div class="col-1">
			<img src="\images\m1.png" id="m5" alt="My Tem 5" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		<div class="col-2">
		</div>	
		<div class="col-1">
			<img src="\images\o1.png" id="o5" alt="Opp Tem 5" class="img-fluid">
		</div>
		<div class="col-4"> 
				<div class="row row-cols-3">
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Bamboozle
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpATK
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				ATK	
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="form-check">
					<label class="form-check-label">
					<input type="checkbox" class="form-check-input" value="">
					<br>
					</label>
					</div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Speed
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				SpDef
				</div>
				</span>
				<span class="border border-bottom-0 border-light">
				<div class="col">
				Def
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
				<span class="border border-top-0 border-light">
				<div class="col">
					<div class="qty mt-5">
						<span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" value="0">
                        <span class="plus bg-dark">+</span>
                    </div>
				</div>
				</span>
			</div>
		</div>
		</div>		
			
	</div>
  </body>
</html>

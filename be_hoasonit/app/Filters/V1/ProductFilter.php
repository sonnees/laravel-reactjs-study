<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class ProductFilter extends ApiFilter{
    protected $safeParms=[
        'id' => ['eq', 'gt', 'lt'],
        'name' => ['eq'],
        'user_id' => ['eq'],
        'date' => ['eq', 'gt', 'lt'],
    ]; 

    protected $columnMap=[
        // name obj => name dbs
    ];

    protected $operatorMap =[
        'eq' => '=',
        'gt' => '>',
        'gte' => '>=',
        'lt' => '<',
        'lte' => '<=',
    ];

    public function transform(Request $request){
        $eloQuery=[];

        foreach($this -> safeParms as $parm => $operators){
            $query = $request->query($parm);
            if(!isset($query)){
                continue;
            }

            $column = $this->columnMap[$parm] ?? $parm;

            foreach($operators as $operator){
                if(isset($query[$operator])){
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }
        }
        return $eloQuery;
    }

}

?>
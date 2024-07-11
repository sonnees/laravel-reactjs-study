<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class UserFilter extends ApiFilter{
    protected $safeParms=[
        'name' => ['eq', 'ne'],
        'email' => ['eq'],
        'email_verified_at' => ['eq'],
        'created_at' => ['eq', 'gt', 'gte', 'lt', 'lte'],
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
        'ne' => '!=',
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